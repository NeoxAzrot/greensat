import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';

import PageBg from '@/public/images/register.webp';

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
      </div>
    </>
  );
};

export default Register;
