import { Metadata } from 'next/types';

import Clients from '@/components/clients-02';
import Cta from '@/components/cta-02';
import Hero from '@/components/hero-about';
import Stats from '@/components/stats-02';
import Team from '@/components/team';
import TeamMembers from '@/components/team-members';

import Content from './content';

export const metadata: Metadata = {
  title: 'About - Tidy',
  description: 'Page description',
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
