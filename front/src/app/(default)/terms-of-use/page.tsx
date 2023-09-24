import { Metadata } from 'next/types';

import Clients from '@/components/clients-02';
import Cta from '@/components/cta-02';
import Hero from '@/components/hero-about';
import Stats from '@/components/stats-02';
import Team from '@/components/team';
import TeamMembers from '@/components/team-members';

import Content from './content';

export const metadata: Metadata = {
  title: 'Les petits détails légaux importants',
  description:
    "On te partage les détails légaux ici. Ce n'est pas la partie la plus fun, mais c'est important. Sois au courant de nos règles du jeu.",
  alternates: {
    canonical: 'https://greensatable.fr/terms-of-use',
    languages: {
      fr: 'https://greensatable.fr/terms-of-use',
    },
  },
  openGraph: {
    title: 'Les petits détails légaux importants',
    url: 'https://greensatable.fr/terms-of-use',
    description:
      "On te partage les détails légaux ici. Ce n'est pas la partie la plus fun, mais c'est important. Sois au courant de nos règles du jeu.",
  },
  twitter: {
    title: 'Les petits détails légaux importants',
    description:
      "On te partage les détails légaux ici. Ce n'est pas la partie la plus fun, mais c'est important. Sois au courant de nos règles du jeu.",
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/terms-of-use',
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
