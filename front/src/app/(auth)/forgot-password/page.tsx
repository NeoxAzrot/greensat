import Image from 'next/image';
import { Metadata } from 'next/types';

import ForgotPasswordImage from '@/public/images/forgot-password.webp';

import Logo from '@/components/layout/logo';

import Form from './form';

export const metadata: Metadata = {
  title: "Oups, t'as perdu ton code ?",
  description:
    "Pas de panique ! Réinitialise ton mot de passe en deux temps trois mouvements. Tu vas retrouver l'accès en un clin d'œil.",
  alternates: {
    canonical: 'https://greensatable.fr/forgot-password',
    languages: {
      fr: 'https://greensatable.fr/forgot-password',
    },
  },
  openGraph: {
    title: "Oups, t'as perdu ton code ?",
    url: 'https://greensatable.fr/forgot-password',
    description:
      "Pas de panique ! Réinitialise ton mot de passe en deux temps trois mouvements. Tu vas retrouver l'accès en un clin d'œil.",
  },
  twitter: {
    title: "Oups, t'as perdu ton code ?",
    description:
      "Pas de panique ! Réinitialise ton mot de passe en deux temps trois mouvements. Tu vas retrouver l'accès en un clin d'œil.",
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/forgot-password',
    },
  },
};

const ForgotPassword = () => {
  return (
    <>
      <div className="w-full md:w-1/2">
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-md mx-auto">
              <div className="mb-6">
                <Logo />
              </div>

              <h1 className="h2 font-playfair-display text-slate-800 mb-12">
                Mot de passe oublié ?
              </h1>

              <Form />
            </div>
          </div>
        </div>
      </div>

      <div className="relative hidden md:block md:w-1/2 bg-slate-900" aria-hidden="true">
        <div className="absolute inset-0" data-aos="fade">
          <Image
            className="opacity-10 w-full h-full object-cover"
            src={ForgotPasswordImage}
            width={760}
            height={900}
            loading="lazy"
            alt="Plante en symétrie naturelle"
          />
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
