// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Robots {
  const baseUrl = "http://localhost:3000"; // Replace with your domain
  //@ts-ignore
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cart`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/user`,
      lastModified: new Date(),
    },
  ];
}