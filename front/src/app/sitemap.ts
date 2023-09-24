import { MetadataRoute } from 'next';

// TODO: Make it dynamic with API routes to get slugs
const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: 'https://greensatable.fr/',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
];

export default sitemap;
