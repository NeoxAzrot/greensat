import { Metadata } from 'next/types';

import Clients from '@/components/clients-02';
import Cta from '@/components/cta-02';
import Hero from '@/components/hero-about';
import Stats from '@/components/stats-02';
import Team from '@/components/team';
import TeamMembers from '@/components/team-members';

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

const TermsOfUSe = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Content />
      <Team />
      <TeamMembers />
      <Clients />
      <Cta />
    </>
  );
};

export default TermsOfUSe;
