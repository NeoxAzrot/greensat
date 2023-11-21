import { Metadata } from 'next/types';

import CtaMap from '@/components/cta-map';
import FeaturesBlocks from '@/components/features-blocks';
import FeaturesSlider from '@/components/features-slider';
import Hero from '@/components/hero-home';
import Partners from '@/components/partners';

import { getAllProducers } from '@/services/producer';

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

const Home = async () => {
  const producers = await getAllProducers({
    sort: 'title',
    populate: '*',
  });

  return (
    <>
      <Hero producers={producers.data} />
      <FeaturesBlocks />
      <FeaturesSlider />
      <Partners />
      <CtaMap />
    </>
  );
};

export default Home;
