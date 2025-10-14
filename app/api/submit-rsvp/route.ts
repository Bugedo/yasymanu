import { NextResponse } from 'next/server';
import { appendRSVPToSheet } from '@/lib/googleSheetsService';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Guardar en Google Sheets
    await appendRSVPToSheet({
      fecha: body.fecha,
      nombre: body.nombre,
      asistencia: body.asistencia,
      acompaniado: body.acompaniado,
      total_invitados: body.total_invitados,
      adultos_18_mas: body.adultos_18_mas,
      menores_10_17: body.menores_10_17,
      menores_2_10: body.menores_2_10,
      menores_de_2: body.menores_de_2,
      restricciones_alimentarias: body.restricciones_alimentarias,
      otra_restriccion: body.otra_restriccion,
      costo_total: body.costo_total,
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
