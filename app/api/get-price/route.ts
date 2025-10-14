import { NextResponse } from 'next/server';
import { getPriceFromSheet } from '@/lib/googleSheetsService';

export async function GET() {
  try {
    const data = await getPriceFromSheet();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error al leer el precio:', error);
    // En caso de error, devolver valores por defecto
    return NextResponse.json({ price: 134500, validUntil: 'valor del mes corriente' });
  }
}
