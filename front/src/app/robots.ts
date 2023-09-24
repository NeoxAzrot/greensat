import { MetadataRoute } from 'next';

const robots: () => MetadataRoute.Robots = () => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: '',
  },
  sitemap: 'https://greensatable.fr/sitemap.xml',
});

export default robots;
