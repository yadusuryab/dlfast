// app/api/sitemap/route.ts

import { NextResponse } from 'next/server';
import { SitemapStream, streamToPromise } from 'sitemap';

export async function GET() {
  const sitemap = new SitemapStream({ hostname: 'https://fastdl.gameskull.xyz' });

  // List of static routes
  const staticRoutes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/terms', changefreq: 'monthly', priority: 0.7 },
    { url: '/privacy', changefreq: 'monthly', priority: 0.7 },
    { url: '/download', changefreq: 'monthly', priority: 0.7 },
    { url: '/faq', changefreq: 'monthly', priority: 0.7 },
    // Add other static routes here
  ];

  // Write static routes to the sitemap
  staticRoutes.forEach(route => {
    sitemap.write(route);
  });

  sitemap.end();

  const sitemapXML = (await streamToPromise(sitemap)).toString();

  // Use Response to set Content-Type as 'application/xml'
  return new Response(sitemapXML, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
