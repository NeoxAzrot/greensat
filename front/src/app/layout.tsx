import 'mapbox-gl/dist/mapbox-gl.css';
import { getServerSession } from 'next-auth';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
import { Metadata, Viewport } from 'next/types';
import { ReactNode } from 'react';

import '@/styles/style.css';

import { authOptions } from '@/utils/auth';

import NextAuthProvider from './contexts/next-auth-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export const viewport: Viewport = {
  colorScheme: 'normal',
  initialScale: 1,
  width: 'device-width',
  themeColor: '#0097b2',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://greensatable.fr/'),
  title: {
    template: 'Greensa’table | %s',
    default: "Greensa’table | Manger local près de l'ENSAT",
  },
  description:
    "Explore la carte interactive de Greensa’table pour trouver les producteurs et commerçants locaux près de l'ENSAT. Profite de réductions, rejoins la vibe éco-responsable, et change le monde !",
  applicationName: 'Greensa’table',
  authors: [
    {
      name: 'Sami Lafrance',
      url: 'https://samilafrance.com/',
    },
  ],
  generator: 'Next.js',
  keywords: [
    'Greensa’table',
    'Greensat',
    'Producteur',
    'Local',
    'Produit',
    'Réduction',
    'Carte',
    'Alimentation',
    'ENSAT',
    'Étudiant',
  ],
  referrer: 'origin',
  creator: 'Sami Lafrance',
  publisher: 'Vercel',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://greensatable.fr/',
    languages: {
      fr: 'https://greensatable.fr/',
    },
  },
  icons: {
    icon: '/images/favicon/favicon.ico',
    shortcut: '/images/favicon/favicon.ico',
    apple: [
      {
        url: '/images/favicon/apple-touch-icon.png',
      },
      {
        sizes: '57x57',
        url: '/images/favicon/apple-touch-icon-57x57.png',
      },
      {
        sizes: '72x72',
        url: '/images/favicon/apple-touch-icon-72x72.png',
      },
      {
        sizes: '76x76',
        url: '/images/favicon/apple-touch-icon-76x76.png',
      },
      {
        sizes: '114x114',
        url: '/images/favicon/apple-touch-icon-114x114.png',
      },
      {
        sizes: '120x120',
        url: '/images/favicon/apple-touch-icon-120x120.png',
      },
      {
        sizes: '144x144',
        url: '/images/favicon/apple-touch-icon-144x144.png',
      },
      {
        sizes: '152x152',
        url: '/images/favicon/apple-touch-icon-152x152.png',
      },
      {
        sizes: '180x180',
        url: '/images/favicon/apple-touch-icon-180x180.png',
      },
    ],
  },
  manifest: 'manifest.webmanifest',
  openGraph: {
    title: {
      template: 'Greensa’table | %s',
      default: "Greensa’table | Manger local près de l'ENSAT",
    },
    type: 'website',
    url: 'https://greensatable.fr/',
    images: [
      {
        url: '/images/favicon/android-chrome-192x192.png',
        secureUrl: '/images/favicon/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'Greensa’table',
      },
    ],
    description:
      "Explore la carte interactive de Greensa’table pour trouver les producteurs et commerçants locaux près de l'ENSAT. Profite de réductions, rejoins la vibe éco-responsable, et change le monde !",
    locale: 'fr_FR',
    siteName: 'Greensa’table',
    countryName: 'France',
  },
  twitter: {
    card: 'summary',
    creator: '@LafranceSami',
    title: {
      template: 'Greensa’table | %s',
      default: "Greensa’table | Manger local près de l'ENSAT",
    },
    description:
      "Explore la carte interactive de Greensa’table pour trouver les producteurs et commerçants locaux près de l'ENSAT. Profite de réductions, rejoins la vibe éco-responsable, et change le monde !",
    images: [
      {
        url: '/images/favicon/android-chrome-192x192.png',
        secureUrl: '/images/favicon/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'Greensa’table',
      },
    ],
  },
  verification: {
    google: 'gU0dQFtwgKqnefBT2F49bL82e0xrLoOKFAZtuq7iSYE',
  },
  appleWebApp: {
    capable: true,
    title: "Greensa’table | Manger local près de l'ENSAT",
    statusBarStyle: 'black-translucent',
    startupImage: {
      url: '/images/favicon/apple-touch-icon.png',
    },
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/',
    },
  },
  category: 'Alimentation',
};

export const revalidate = 10;

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const session = await getServerSession(authOptions);

  return (
    <html lang="fr">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />

      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>

      <body
        className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}
      >
        <NextAuthProvider session={session}>{children}</NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
