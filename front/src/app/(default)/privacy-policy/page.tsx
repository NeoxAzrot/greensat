import { Metadata } from 'next/types';

import Clients from '@/components/clients-02';
import Cta from '@/components/cta-02';
import Hero from '@/components/hero-about';
import Stats from '@/components/stats-02';
import Team from '@/components/team';
import TeamMembers from '@/components/team-members';

import Content from './content';

export const metadata: Metadata = {
  title: "Ta privacy, c'est important pour nous",
  description:
    'Découvre comment on prend soin de tes données dans notre politique de confidentialité. Ta vie privée compte, et on la respecte à fond.',
  alternates: {
    canonical: 'https://greensatable.fr/privacy-policy',
    languages: {
      fr: 'https://greensatable.fr/privacy-policy',
    },
  },
  openGraph: {
    title: "Ta privacy, c'est important pour nous",
    url: 'https://greensatable.fr/privacy-policy',
    description:
      'Découvre comment on prend soin de tes données dans notre politique de confidentialité. Ta vie privée compte, et on la respecte à fond.',
  },
  twitter: {
    title: "Ta privacy, c'est important pour nous",
    description:
      'Découvre comment on prend soin de tes données dans notre politique de confidentialité. Ta vie privée compte, et on la respecte à fond.',
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/privacy-policy',
    },
  },
};

const PrivacyPolicy = () => {
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

export default PrivacyPolicy;
