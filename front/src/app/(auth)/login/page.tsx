import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';

import PageBG from '@/public/images/login.webp';

import Logo from '@/components/layout/logo';

import Button from './button';

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

const Login = () => {
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
                Se connecter à Greensa’table
              </h1>

              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="emailOrStudentNumber"
                    >
                      Email ou numéro étudiant <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="emailOrStudentNumber"
                      className="form-input py-2 w-full"
                      type="email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="password">
                      Mot de passe <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="password"
                      className="form-input py-2 w-full"
                      type="password"
                      autoComplete="on"
                      required
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <Button />
                </div>
                <div className="text-center mt-5">
                  <Link className="text-blue-600 hover:underline" href="/reset-password">
                    Mot de passe oublié ?
                  </Link>
                </div>
                <div className="text-center mt-5">
                  <span className="text-sm text-slate-500">
                    Vous n&apos;avez pas encore de compte ?{' '}
                    <Link
                      className="text-blue-600 hover:underline"
                      href="/register"
                      aria-label="Request a demo"
                    >
                      S&apos;inscrire maintenant
                    </Link>
                  </span>
                </div>
              </form>
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
            src={PageBG}
            width={760}
            height={900}
            loading="lazy"
            alt="Background"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
