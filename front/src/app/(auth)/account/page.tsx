import Image from 'next/image';
import { Metadata } from 'next/types';

import LoginImage from '@/public/images/login.webp';

import Logo from '@/components/layout/logo';

import Form from './form';

// TODO: Review this page when it's done with aria, useless comment, etc. + ajouter un encadrer quand le compte doit être confirmé ou quand il est bloqué
export const metadata: Metadata = {
  title: 'Ton espace personnel',
  description:
    'Bienvenue dans ton espace personnel ! Gère tes affaires, tes produits gratuits, et explore les avantages éco-responsables. Ta vie, ton compte !',
  alternates: {
    canonical: 'https://greensatable.fr/account',
    languages: {
      fr: 'https://greensatable.fr/account',
    },
  },
  openGraph: {
    title: 'Ton espace personnel',
    url: 'https://greensatable.fr/account',
    description:
      'Bienvenue dans ton espace personnel ! Gère tes affaires, tes produits gratuits, et explore les avantages éco-responsables. Ta vie, ton compte !',
  },
  twitter: {
    title: 'Ton espace personnel',
    description:
      'Bienvenue dans ton espace personnel ! Gère tes affaires, tes produits gratuits, et explore les avantages éco-responsables. Ta vie, ton compte !',
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/account',
    },
  },
};

const Account = () => {
  return (
    <>
      {/* Content */}
      <div className="w-full md:w-1/2">
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-md mx-auto">
              {/* Site branding */}
              <div className="mb-6">
                <Logo />
              </div>

              <h1 className="h2 font-playfair-display text-slate-800 mb-12">
                Ton espace personnel
              </h1>

              <Form />
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="relative hidden md:block md:w-1/2 bg-slate-900" aria-hidden="true">
        {/* Bg image */}
        <div className="absolute inset-0" data-aos="fade">
          <Image
            className="opacity-10 w-full h-full object-cover"
            src={LoginImage}
            width={760}
            height={900}
            loading="lazy"
            alt="Plante dans une main"
          />
        </div>
      </div>
    </>
  );
};

export default Account;
