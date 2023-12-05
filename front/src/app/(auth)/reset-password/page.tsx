import Image from 'next/image';
import { Metadata } from 'next/types';

import ResetPasswordImage from '@/public/images/reset-password.webp';

import Logo from '@/components/layout/logo';

import Form from './form';

export const metadata: Metadata = {
  title: 'Prêt à choisir un nouveau mot de passe ?',
  description:
    "Voilà l'occasion rêvée de donner un coup de jeune à ton mot de passe ! Invente quelque chose de pétillant, d'unique, et surtout, ultra-sécurisé.",
  alternates: {
    canonical: 'https://greensatable.fr/reset-password',
    languages: {
      fr: 'https://greensatable.fr/reset-password',
    },
  },
  openGraph: {
    title: 'Prêt à choisir un nouveau mot de passe ?',
    url: 'https://greensatable.fr/reset-password',
    description:
      "Voilà l'occasion rêvée de donner un coup de jeune à ton mot de passe ! Invente quelque chose de pétillant, d'unique, et surtout, ultra-sécurisé.",
  },
  twitter: {
    title: 'Prêt à choisir un nouveau mot de passe ?',
    description:
      "Voilà l'occasion rêvée de donner un coup de jeune à ton mot de passe ! Invente quelque chose de pétillant, d'unique, et surtout, ultra-sécurisé.",
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/reset-password',
    },
  },
};

const ResetPassword = () => {
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
                Réinitialiser mon mot de passe
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
            src={ResetPasswordImage}
            width={760}
            height={900}
            loading="lazy"
            alt="Éolienne avec de la nature"
          />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
