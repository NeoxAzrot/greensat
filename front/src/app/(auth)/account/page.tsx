import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';

import LoginImage from '@/public/images/login.webp';

import Logo from '@/components/layout/logo';

// TODO: Review this page when it's done with aria, useless comment, etc.
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
                  <button className="btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group">
                    Se connecter{' '}
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </button>
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
                      href="/request-demo"
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
