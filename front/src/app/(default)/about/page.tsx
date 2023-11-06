import { Metadata } from 'next/types';

import Clients from '@/components/clients-02';
import ClientsExplanation from '@/components/clients-explanation';
import Cta from '@/components/cta';
import Hero from '@/components/hero-about';
import TeamMembers from '@/components/team-members';

import Content from './content';

export const metadata: Metadata = {
  title: 'Notre équipe, notre engagement',
  description:
    "On est des étudiants de l'ENSAT, engagés pour l'achat local, la durabilité et la planète. Rejoins notre équipe pour un monde plus vert !",
  alternates: {
    canonical: 'https://greensatable.fr/about',
    languages: {
      fr: 'https://greensatable.fr/about',
    },
  },
  openGraph: {
    title: 'Notre équipe, notre engagement',
    url: 'https://greensatable.fr/about',
    description:
      "On est des étudiants de l'ENSAT, engagés pour l'achat local, la durabilité et la planète. Rejoins notre équipe pour un monde plus vert !",
  },
  twitter: {
    title: 'Notre équipe, notre engagement',
    description:
      "On est des étudiants de l'ENSAT, engagés pour l'achat local, la durabilité et la planète. Rejoins notre équipe pour un monde plus vert !",
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/about',
    },
  },
};

const About = () => {
  return (
    <>
      <Hero />
      <Content />
      <TeamMembers />
      <Clients />
      <ClientsExplanation />
      <Cta />
    </>
  );
};

export default About;
