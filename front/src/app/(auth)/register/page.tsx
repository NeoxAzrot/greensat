import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';

import PageBg from '@/public/images/register.webp';
import CustomerAvatar from '@/public/images/template/customer-avatar-04.jpg';

import Logo from '@/components/layout/logo';

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
      {/* Content */}
      <div className="w-full md:w-1/2">
        <div className="min-h-screen h-full flex flex-col justify-center">
          <div className="px-5 sm:px-6 py-8">
            <div className="w-full max-w-md mx-auto">
              {/* Site branding */}
              <div className="mb-6">
                <Logo />
              </div>

              <h1 className="h2 font-playfair-display text-slate-800 mb-12">Créer un compte</h1>

              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <div className="sm:w-1/2">
                      <label className="block text-sm font-medium mb-1" htmlFor="firstname">
                        Prénom <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="firstname"
                        className="form-input py-2 w-full"
                        type="text"
                        required
                      />
                    </div>
                    <div className="sm:w-1/2">
                      <label className="block text-sm font-medium mb-1" htmlFor="lastname">
                        Nom <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="lastname"
                        className="form-input py-2 w-full"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="studentNumber">
                      Numéro étudiant <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="studentNumber"
                      className="form-input py-2 w-full"
                      type="text"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input id="email" className="form-input py-2 w-full" type="email" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">
                      Numéro de téléphone <span className="text-rose-500">*</span>
                    </label>
                    <input id="phone" className="form-input py-2 w-full" type="tel" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="password">
                      Mot de passe <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="password"
                      className="form-input py-2 w-full"
                      type="password"
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="passwordConfirmation"
                    >
                      Confirmation du mot de passe <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="passwordConfirmation"
                      className="form-input py-2 w-full"
                      type="password"
                      required
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button className="btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group">
                    Rejoindre Greensa’table{' '}
                    <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </button>
                </div>
                <div className="mt-5">
                  <label className="flex items-start">
                    <input type="checkbox" className="form-checkbox mt-0.5" defaultChecked />
                    <span className="text-sm text-slate-500 ml-3">
                      En cliquant sur Rejoindre Greensa’table, vous acceptez nos{' '}
                      <Link
                        className="text-blue-600 hover:underline"
                        href="terms-of-use"
                        aria-label="Terms of Use"
                      >
                        Conditions d&apos;utilisation
                      </Link>{' '}
                      et notre{' '}
                      <Link
                        className="text-blue-600 hover:underline"
                        href="privacy-policy"
                        aria-label="Privacy Policy"
                      >
                        Politique de confidentialité
                      </Link>
                      .
                    </span>
                  </label>
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
                    alt="Customer Avatar 04"
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

export default Register;
