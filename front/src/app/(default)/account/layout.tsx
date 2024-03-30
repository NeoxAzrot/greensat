'use client';

import { ReactNode } from 'react';

import CtaSupport from '@/components/cta-support';
import Hero from '@/components/hero';

import Tabs from './tabs';

interface AccountLayoutProps {
  children: ReactNode;
}

const AccountLayout = ({ children }: AccountLayoutProps) => {
  return (
    <>
      <Hero
        title="Ton espace personnel"
        description="Gère ton compte, tes produits gratuits, et explore les avantages éco-responsables."
      />

      <Tabs />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8">{children}</div>
      </div>

      <CtaSupport />
    </>
  );
};

export default AccountLayout;
