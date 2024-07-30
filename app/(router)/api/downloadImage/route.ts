import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const encodedUrl = url.searchParams.get('url');

  if (!encodedUrl) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    const decodedUrl = decodeURIComponent(encodedUrl);
    const response:any = await fetch(encodedUrl);
    console.log(encodedUrl);
    

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Get the filename from Content-Disposition header if available
    let filename = 'download';
    const contentDisposition = response.headers.get('Content-Disposition');
    if (contentDisposition) {
      const match = contentDisposition.match(/filename="([^"]*)"/);
      if (match) {
        filename = match[1];
      }
    }

    // Set the Content-Type based on the response headers
    const contentType = response.headers.get('Content-Type') || 'application/octet-stream';
    const headers = new Headers({
      'Content-Type': contentType,
      'Content-Disposition': `attachment; filename="${filename}"`,
    });

    // Return the response body and headers
    return new NextResponse(response.body, { headers });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

// Handle OPTIONS requests
export async function OPTIONS() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
