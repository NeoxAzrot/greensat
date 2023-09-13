import { Metadata } from 'next/types';

import Cta from '@/components/cta';
import FeaturesBlocks from '@/components/features-blocks';
import Features from '@/components/features-home';
import Features02 from '@/components/features-home-02';
import Features03 from '@/components/features-home-03';
import Hero from '@/components/hero-home';
import Target from '@/components/target';

export const metadata: Metadata = {
  title: 'Home - Tidy',
  description: 'Page description',
};

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Features />
      <Features02 />
      <Features03 />
      <Target />
      <Cta />
    </>
  );
};

export default Home;
