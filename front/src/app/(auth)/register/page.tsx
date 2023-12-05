import Image from 'next/image';
import { Metadata } from 'next/types';

import RegisterImage from '@/public/images/register.webp';

import Logo from '@/components/layout/logo';

import Form from './form';

export const metadata: Metadata = {
  title: 'Rejoins la révolution green',
  description:
    "Fais partie de la vibe Greensa’table en t'inscrivant ici. Soutiens l'achat local, gagne des avantages, et deviens un membre de la team éco-friendly. Let's go green !",
  alternates: {
    canonical: 'https://greensatable.fr/register',
    languages: {
      fr: 'https://greensatable.fr/register',
    },
  },
  openGraph: {
    title: 'Rejoins la révolution green',
    url: 'https://greensatable.fr/register',
    description:
      "Fais partie de la vibe Greensa’table en t'inscrivant ici. Soutiens l'achat local, gagne des avantages, et deviens un membre de la team éco-friendly. Let's go green !",
  },
  twitter: {
    title: 'Rejoins la révolution green',
    description:
      "Fais partie de la vibe Greensa’table en t'inscrivant ici. Soutiens l'achat local, gagne des avantages, et deviens un membre de la team éco-friendly. Let's go green !",
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/register',
    },
  },
};

const Register = () => {
  return (
    <>
      <div className="w-full md:w-1/2">
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-md mx-auto">
              <div className="mb-6">
                <Logo />
              </div>

              <h1 className="h2 font-playfair-display text-slate-800 mb-12">Créer un compte</h1>

              <Form />
            </div>
          </div>
        </div>
      </div>

      <div className="relative hidden md:block md:w-1/2 bg-slate-900" aria-hidden="true">
        <div className="absolute inset-0" data-aos="fade">
          <Image
            className="opacity-10 w-full h-full object-cover"
            src={RegisterImage}
            width={760}
            height={900}
            loading="lazy"
            alt="Panier de légumes"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
