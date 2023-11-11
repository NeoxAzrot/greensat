import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '@/public/images/favicon/logo.webp';

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

          {/* TODO: Remove this fake column */}
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
          {/* TODO: Remove comments */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
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
          </div> */}

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
                href="https://www.instagram.com/greens_a_table"
                target="_blank"
                aria-label="Instagram"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
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
