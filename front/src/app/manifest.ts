import { MetadataRoute } from 'next';

const manifest: () => MetadataRoute.Manifest = () => ({
  name: 'Greensa’table',
  short_name: 'Greensa’table',
  description:
    "Explore la carte interactive de Greensa’table pour trouver les producteurs et commerçants locaux près de l'ENSAT. Profite de réductions, rejoins la vibe éco-responsable, et change le monde !",
  start_url: '/',
  display: 'standalone',
  background_color: '#0097b2',
  theme_color: '#0097b2',
  icons: [
    {
      src: '/images/favicon/favicon.ico',
      sizes: '64x64 32x32 24x24 16x16',
      type: 'image/x-icon',
    },
    {
      src: '/images/favicon/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      src: '/images/favicon/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
});

export default manifest;
