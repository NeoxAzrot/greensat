import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';

import PageBg from '@/public/images/reset-password.webp';

import Logo from '@/components/layout/logo';

export const metadata: Metadata = {
  title: "Oups, t'as perdu ton code ?",
  description:
    "Pas de panique ! Réinitialise ton mot de passe en deux temps trois mouvements. Tu vas retrouver l'accès en un clin d'œil.",
  alternates: {
    canonical: 'https://greensatable.fr/reset-password',
    languages: {
      fr: 'https://greensatable.fr/reset-password',
    },
  },
  openGraph: {
    title: "Oups, t'as perdu ton code ?",
    url: 'https://greensatable.fr/reset-password',
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
      url: 'https://greensatable.fr/reset-password',
    },
  },
};

const ResetPassword = () => {
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
                Réinitialiser votre mot de passe
              </h1>

              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input id="email" className="form-input py-2 w-full" type="email" required />
                  </div>
                </div>
                <div className="mt-6">
                  <button className="btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group">
                    Réinitialiser votre mot de passe{' '}
                    <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </button>
                </div>
                <div className="text-center mt-5">
                  <span className="text-sm text-slate-500">
                    Vous avez déjà un compte ?{' '}
                    <Link
                      className="text-blue-600 hover:underline"
                      href="/login"
                      aria-label="Sign in"
                    >
                      Se connecter
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
            src={PageBg}
            width={760}
            height={900}
            priority
            alt="Background"
          />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
