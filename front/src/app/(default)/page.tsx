import { Metadata } from 'next/types';

import Clients from '@/components/clients-02';
import Cta from '@/components/cta';
import FeaturesBlocks from '@/components/features-blocks';
import Features from '@/components/features-home';
import Hero from '@/components/hero-home';

export const metadata: Metadata = {
  title: "Manger local près de l'ENSAT",
  description:
    "Explore la carte interactive de Greensa’table pour trouver les producteurs et commerçants locaux près de l'ENSAT. Profite de réductions, rejoins la vibe éco-responsable, et change le monde !",
  alternates: {
    canonical: 'https://greensatable.fr/',
    languages: {
      fr: 'https://greensatable.fr/',
    },
  },
  openGraph: {
    title: "Manger local près de l'ENSAT",
    url: 'https://greensatable.fr/',
    description:
      "Explore la carte interactive de Greensa’table pour trouver les producteurs et commerçants locaux près de l'ENSAT. Profite de réductions, rejoins la vibe éco-responsable, et change le monde !",
  },
  twitter: {
    title: "Manger local près de l'ENSAT",
    description:
      "Explore la carte interactive de Greensa’table pour trouver les producteurs et commerçants locaux près de l'ENSAT. Profite de réductions, rejoins la vibe éco-responsable, et change le monde !",
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/',
    },
  },
};

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Features />
      <Clients />
      <Cta />
    </>
  );
};

export default Home;
