import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '@/public/images/favicon/apple-touch-icon-180x180.png';

const Footer = () => {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-2">
              {/* Logo */}
              <Link
                href="/"
                className="inline-flex text-blue-600 transition duration-150 ease-in-out"
                aria-label="Cruip"
              >
                <Image
                  className="mx-auto object-cover"
                  src={LogoImage}
                  width={40}
                  height={40}
                  priority
                  alt="About intro"
                />
              </Link>
            </div>
            <div className="text-lg font-bold text-slate-800">
              La meilleure façon de manger local.
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2"></div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Pages</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/producers"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Les producteurs
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Ressources</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <Link
                  href="/account"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Mon compte
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Se connecter
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  S&apos;inscrire
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-800 font-semibold mb-2">Légal</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <Link
                  href="/terms-of-use"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/plan"
                  className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                >
                  Plan du site
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">
          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                href="#0"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 3.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0 0 19.5 2.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 0 0-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.164-6.5-1.814-8.5-4.288C1 3.32.833 3.98.833 4.722c0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C4.667 15.608 2.917 16.268 1 16.268c-.333 0-.667 0-1-.082C1.833 17.34 4 18 6.25 18c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out"
                href="#0"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 0 1 3.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-slate-500 mr-4">
            © Greensa&apos;table. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
