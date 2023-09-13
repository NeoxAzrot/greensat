'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactNode, useEffect } from 'react';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
