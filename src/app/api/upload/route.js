import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.formData();
    const file = data.get('file');

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(process.cwd(), 'public', file.name);
    writeFile(filePath, buffer);
    console.log('file upload to server in: ', filePath);

    return new Response(
      JSON.stringify({
        message: 'Uploaded file!',
      })
    );
  } catch {
    return NextResponse.json(
      JSON.stringify({
        message: 'No file uploaded!',
      }),
      {
        status: 400,
      }
    );
  }
}
