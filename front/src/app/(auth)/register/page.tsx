import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';

import CustomerAvatar from '@/public/images/template/customer-avatar-04.jpg';
import PageBg from '@/public/images/template/request-demo-bg.jpg';

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
                {/* Logo */}
                <Link
                  className="inline-flex text-blue-600 transition duration-150 ease-in-out"
                  href="/"
                  aria-label="Cruip"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.25 4.116c.039.899-.51.468-.79.629-.894.524-1.491 2.04-2.612 2.125-.423.87-1.121.898-1.874 1.503-.327.256-.463.839-.756 1.097l-3.694 3.27a2.395 2.395 0 0 1-.44.314c-.378.219-.656.717-1.096.81-.475.106-1.601-.775-2.633-2.012-.825-1.587-.025-1.924.518-2.525.916-1.022 2.48-2.064 3.585-2.753.843-.537 1.677-1.13 2.59-1.482.935-.357 1.779-.842 2.738-1.041.7-.141 1.522.063 2.206 0a9.596 9.596 0 0 1 2.258.065M30.676 3.646c-.06 1.046-1.038.955-1.593 1.363C27.32 6.31 25.8 8.656 23.63 9.583c-1.07 1.412-2.411 1.952-4.056 3.254-.711.56-1.21 1.417-1.877 1.965-2.887 2.381-5.668 4.524-8.64 6.823-.303.236-.646.468-1.008.697-.834.528-1.675 1.394-2.543 1.77-.95.413-2.376-.279-3.375-1.544-.43-1.849 1.112-2.657 2.38-3.737 2.13-1.82 5.33-4.012 7.558-5.536 1.707-1.17 3.395-2.426 5.138-3.43 1.789-1.03 3.439-2.179 5.224-3.063 1.303-.643 2.758-.96 4.038-1.53a40.762 40.762 0 0 1 4.207-1.606M30.386 14.346c.229.918-.566.8-.896 1.136-1.048 1.058-1.721 3.056-3.254 3.7-.563 1.17-1.522 1.532-2.603 2.507-.464.426-.731 1.128-1.177 1.542-1.94 1.77-3.91 3.263-6.082 4.772a6.36 6.36 0 0 1-.748.43c-.618.313-1.24.914-1.901 1.065-.731.161-1.856-.807-2.662-2.199-.401-1.784.715-2.129 1.6-2.818 1.49-1.15 3.693-2.49 5.192-3.486 1.154-.755 2.247-1.633 3.417-2.292 1.2-.68 2.244-1.52 3.44-2.128.868-.448 1.927-.61 2.79-1.029.92-.447 1.873-.85 2.884-1.2" />
                  </svg>
                </Link>
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
                    <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
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
                      href="/signin"
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