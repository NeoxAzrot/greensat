import { Metadata } from 'next/types';
import qs from 'qs';

import CtaMap from '@/components/cta-map';
import FeaturesBlocks from '@/components/features-blocks';
import FeaturesSlider from '@/components/features-slider';
import Hero from '@/components/hero-home';
import PartnersDark from '@/components/partners-dark';

import { getAllProducers } from '@/queries/producer';

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
  const query = qs.stringify(
    {
      fields: ['slug', 'title', 'address', 'latitude', 'longitude', 'businessType'],
      populate: {
        products: {
          fields: ['active', 'count'],
        },
        image: {
          fields: ['url'],
        },
      },
      sort: ['title'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  const producers = await getAllProducers({
    query,
  });

  return (
    <>
      <Hero producers={producers.data} />
      <FeaturesBlocks />
      <FeaturesSlider />
      <PartnersDark />
      <CtaMap />
    </>
  );
};

export default Home;
