import { Metadata } from 'next/types';

import Hero from '@/components/hero-support';

import Content from './content';

export const metadata: Metadata = {
  title: 'Support - Tidy',
  description: 'Page description',
};

const Support = () => {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
};

export default Support;
