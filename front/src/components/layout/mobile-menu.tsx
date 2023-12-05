'use client';

import { Transition } from '@headlessui/react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const MobileMenu = () => {
  const { status } = useSession();

  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // Close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // Close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const handleClose = () => {
    setMobileNavOpen(false);
  };

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <div className="flex md:hidden">
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={toggleMobileNav}
      >
        <span className="sr-only">Menu</span>

        <svg
          className="w-6 h-6 fill-current text-slate-900 dark:text-slate-100"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link
                href="/about"
                className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                onClick={handleClose}
                aria-label="À propos"
              >
                À propos
              </Link>
            </li>

            <li>
              <Link
                href="/producers"
                className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                onClick={handleClose}
                aria-label="Les producteurs"
              >
                Les producteurs
              </Link>
            </li>

            <li className="pb-2 mb-2 border-b border-gray-200">
              <Link
                href="/support"
                className="flex font-medium text-slate-800 hover:text-blue-600 py-2"
                onClick={handleClose}
                aria-label="Support"
              >
                Des questions ?
              </Link>
            </li>

            {status === 'authenticated' ? (
              <li>
                <Link
                  href="/account"
                  className="flex font-medium text-blue-600 py-2 group"
                  onClick={handleClose}
                  aria-label="Mon compte"
                >
                  Mon compte{' '}
                  <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="/login"
                    className="flex font-medium w-full text-slate-800 hover:text-blue-600 py-2"
                    onClick={handleClose}
                    aria-label="Se connecter"
                  >
                    Se connecter
                  </Link>
                </li>

                <li>
                  <Link
                    href="/register"
                    className="flex font-medium text-blue-600 py-2 group"
                    onClick={handleClose}
                    aria-label="Créer un compte"
                  >
                    S&apos;inscrire{' '}
                    <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </Transition>
      </div>
    </div>
  );
};

export default MobileMenu;
