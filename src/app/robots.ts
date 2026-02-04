// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "http://localhost:3000"; // Replace with your domain

  return {
    rules: {
      userAgent: '*', // Rules for ALL crawlers (Google, Bing, etc.)
      allow: '/',     // They can see the home and shop
      disallow: [
        '/admin',     // Hide your curator dashboard
        '/user',
        '/cart',      // Hide the selection archive
        '/checkout',  // Hide the payment flow
        '/success',   // Hide the acquisition certificate
        '/api',       // Hide your backend routes
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Directs them to your sitemap
  };
}