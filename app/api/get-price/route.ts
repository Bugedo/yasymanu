import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function GET() {
  try {
    // Decodificar credenciales desde base64 o usar variables individuales
    let credentials;
    if (process.env.GOOGLE_CREDENTIALS_BASE64) {
      const credentialsJson = Buffer.from(
        process.env.GOOGLE_CREDENTIALS_BASE64,
        'base64'
      ).toString('utf-8');
      credentials = JSON.parse(credentialsJson);
    } else {
      credentials = {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      };
    }

    // Configurar autenticación
    const auth = new google.auth.GoogleAuth({
      credentials,
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
