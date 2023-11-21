import Link from 'next/link';

import Logo from './logo';
import MobileMenu from './mobile-menu';

interface HeaderProps {
  mode?: 'light' | 'dark';
}

const Header = ({ mode = 'dark' }: HeaderProps) => {
  return (
    <header className={`absolute w-full z-30 ${mode !== 'light' && 'dark'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link
                  href="/about"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  aria-label="À propos"
                >
                  À propos
                </Link>
              </li>

              <li>
                <Link
                  href="/producers"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  aria-label="Les producteurs"
                >
                  Les producteurs
                </Link>
              </li>

              <li>
                <Link
                  href="/support"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  aria-label="Support"
                >
                  Des questions ?
                </Link>
              </li>
            </ul>

            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/login"
                  className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                  aria-label="Se connecter"
                >
                  Se connecter
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="font-medium text-blue-600 dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group"
                  aria-label="Créer un compte"
                >
                  S&apos;inscrire{' '}
                  <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
