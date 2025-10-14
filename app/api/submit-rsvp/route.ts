import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Configurar autenticación con JWT (método recomendado)
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Preparar los datos para la hoja de cálculo
    const values = [
      [
        body.fecha,
        body.nombre,
        body.asistencia,
        body.acompaniado,
        body.total_invitados,
        body.adultos_18_mas,
        body.menores_10_17,
        body.menores_2_10,
        body.menores_de_2,
        body.restricciones_alimentarias,
        body.otra_restriccion,
        body.costo_total,
      ],
    ];

    // Agregar la fila a Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Confirmaciones!A:L', // Actualizado para incluir las nuevas columnas
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return NextResponse.json({ success: true, message: 'Datos guardados correctamente' });
  } catch (error) {
    const err = error as Error;
    console.error('Error al guardar en Google Sheets:', err);
    console.error('Error name:', err?.name);
    console.error('Error message:', err?.message);
    console.error('Error stack:', err?.stack);
    return NextResponse.json(
      { success: false, message: 'Error al guardar los datos', error: err?.message },
      { status: 500 },
    );
  }
}
