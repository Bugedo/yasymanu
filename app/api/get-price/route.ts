import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  try {
    // Configurar autenticación con JWT (método recomendado)
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Leer el precio de la celda R2
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Confirmaciones!R2', // Celda donde estará el precio
    });

    const price = response.data.values?.[0]?.[0];

    if (!price) {
      // Si no hay precio, devolver el precio por defecto
      return NextResponse.json({ price: 134500 });
    }

    // Convertir a número (eliminar puntos, comas, etc)
    const numericPrice = parseInt(price.toString().replace(/[^0-9]/g, ''));

    return NextResponse.json({ price: numericPrice });
  } catch (error) {
    console.error('Error al leer el precio:', error);
    // En caso de error, devolver precio por defecto
    return NextResponse.json({ price: 134500 });
  }
}
