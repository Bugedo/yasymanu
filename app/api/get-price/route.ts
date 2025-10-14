import { NextResponse } from 'next/server';
import { getPriceFromSheet } from '@/lib/googleSheetsService';

export async function GET() {
  try {
    const price = await getPriceFromSheet();
    return NextResponse.json({ price });
  } catch (error) {
    console.error('Error al leer el precio:', error);
    // En caso de error, devolver precio por defecto
    return NextResponse.json({ price: 134500 });
  }
}
