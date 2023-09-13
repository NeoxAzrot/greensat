'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  return <main className="flex">{children}</main>;
};

export default AuthLayout;
