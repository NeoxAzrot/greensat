import Image from 'next/image';
import { Metadata } from 'next/types';

import LoginImage from '@/public/images/login.webp';

import Logo from '@/components/layout/logo';

import Form from './form';

export const metadata: Metadata = {
  title: 'Connecte-toi et rejoins la fête verte',
  description:
    "Connecte-toi à ton compte en un clin d'œil. Accède à des offres spéciales, gère tes produits gratuits et deviens un héros éco-responsable !",
  alternates: {
    canonical: 'https://greensatable.fr/login',
    languages: {
      fr: 'https://greensatable.fr/login',
    },
  },
  openGraph: {
    title: 'Connecte-toi et rejoins la fête verte',
    url: 'https://greensatable.fr/login',
    description:
      "Connecte-toi à ton compte en un clin d'œil. Accède à des offres spéciales, gère tes produits gratuits et deviens un héros éco-responsable !",
  },
  twitter: {
    title: 'Connecte-toi et rejoins la fête verte',
    description:
      "Connecte-toi à ton compte en un clin d'œil. Accède à des offres spéciales, gère tes produits gratuits et deviens un héros éco-responsable !",
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/login',
    },
  },
};

const Login = async () => {
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
                Se connecter à Greensa’table
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

export default Login;
