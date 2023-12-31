import { Metadata } from 'next/types';

import Hero from '@/components/hero';

import { getAllProducers } from '@/services/producer';

import Content from './content';

export const metadata: Metadata = {
  title: 'Trouve ton chemin facilement',
  description:
    "Tu te sens perdu ? Consulte notre plan du site pour retrouver tes repères. On te guide à travers toutes nos pages. Trouve tout en un clin d'œil !",
  alternates: {
    canonical: 'https://greensatable.fr/plan',
    languages: {
      fr: 'https://greensatable.fr/plan',
    },
  },
  openGraph: {
    title: 'Trouve ton chemin facilement',
    url: 'https://greensatable.fr/plan',
    description:
      "Tu te sens perdu ? Consulte notre plan du site pour retrouver tes repères. On te guide à travers toutes nos pages. Trouve tout en un clin d'œil !",
  },
  twitter: {
    title: 'Trouve ton chemin facilement',
    description:
      "Tu te sens perdu ? Consulte notre plan du site pour retrouver tes repères. On te guide à travers toutes nos pages. Trouve tout en un clin d'œil !",
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/plan',
    },
  },
};

const TermsOfUSe = async () => {
  const producers = await getAllProducers({
    sort: 'title',
  });

  return (
    <>
      <Hero title="Plan du site" />
      <Content producers={producers.data} />
    </>
  );
};

export default TermsOfUSe;
