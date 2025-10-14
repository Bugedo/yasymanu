import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function getGoogleSheetsClient() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error('Missing Google Sheets credentials');
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, '\n'), // Crucial: convierte \\n de Vercel a \n reales
    scopes: SCOPES,
  });

  return google.sheets({ version: 'v4', auth });
}

export async function appendRSVPToSheet(data: {
  fecha: string;
  nombre: string;
  asistencia: string;
  acompaniado: string;
  total_invitados: number;
  adultos_18_mas: number;
  menores_10_17: number;
  menores_2_10: number;
  menores_de_2: number;
  restricciones_alimentarias: string;
  otra_restriccion: string;
  costo_total: number;
}) {
  try {
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const rowData = [
      data.fecha,
      data.nombre,
      data.asistencia,
      data.acompaniado,
      data.total_invitados,
      data.adultos_18_mas,
      data.menores_10_17,
      data.menores_2_10,
      data.menores_de_2,
      data.restricciones_alimentarias,
      data.otra_restriccion,
      data.costo_total,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Confirmaciones!A:L',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('✅ RSVP saved to Google Sheets');
  } catch (error) {
    const err = error as Error;
    console.error('❌ Google Sheets error:', err.message);
    throw err; // Lanzar error para que la API lo maneje
  }
}

export async function getPriceFromSheet(): Promise<{ price: number; validUntil: string }> {
  try {
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Leer precio (R2) y fecha válida hasta (S2) en una sola llamada
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Confirmaciones!R2:S2',
    });

    const values = response.data.values?.[0];
    const price = values?.[0];
    const validUntil = values?.[1];

    if (!price) {
      return { price: 134500, validUntil: 'valor del mes corriente' };
    }

    const numericPrice = parseInt(price.toString().replace(/[^0-9]/g, ''));
    return {
      price: numericPrice,
      validUntil: validUntil?.toString() || 'valor del mes corriente',
    };
  } catch (error) {
    console.error('Error al leer precio:', error);
    return { price: 134500, validUntil: 'valor del mes corriente' };
  }
}
