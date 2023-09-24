import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';

import CustomerAvatar from '@/public/images/template/customer-avatar-05.jpg';
import PageBG from '@/public/images/template/sign-in-bg.jpg';

import Logo from '@/components/layout/logo';

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
            src={PageBG}
            width={760}
            height={900}
            priority
            alt="Background"
          />
        </div>

        {/* Quote */}
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6">
            <div className="w-full max-w-lg mx-auto">
              <h2 className="h3 md:text-4xl font-playfair-display text-slate-100 mb-4">
                Greensa’table
              </h2>
              <div className="space-y-3">
                <svg className="fill-blue-600" width="20" height="16" viewBox="0 0 20 16">
                  <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                </svg>
                <blockquote className="text-slate-400 italic">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur e xcepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia.
                </blockquote>
              </div>
              <div className="flex items-center mt-4">
                <a href="#0">
                  <Image
                    className="rounded-full shrink-0 mr-3"
                    src={CustomerAvatar}
                    width={32}
                    height={32}
                    alt="Customer Avatar 05"
                  />
                </a>
                <div className="font-medium">
                  <span className="text-slate-200">Lise Michel</span>
                  <span className="text-slate-600"> · </span>
                  <span className="text-slate-500">CEO, Greensa’table</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
