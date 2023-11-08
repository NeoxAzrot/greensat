'use client';

import { Transition } from '@headlessui/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import SchoolImage from '@/public/images/school.webp';

const FeaturesHome = () => {
  const [tab, setTab] = useState<number>(1);

  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 mb-4">
              Actualités et événements
            </h2>
            <p className="text-xl text-slate-768">
              En plus de t’accompagner dans tes courses du quotidien, nous organisons des évènements
              tout au long de l’année : visite de marché, marché à l’ENSAT, atelier sensibilisation
              SSA en partenariat avec Caracole, visite de ferme en partenariat avec Avoice… reste
              attentif pour ne rien louper !
            </p>
          </div>

          {/* Section content */}
          <div className="max-w-3xl mx-auto">
            {/* Tabs buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pb-12">
              <button
                className={`text-center transition-opacity ${
                  tab !== 1 && 'opacity-50 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setTab(1);
                }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#2174EA" d="M20 20h6v16h-6z" />
                      <path fillOpacity=".64" fill="#5091EE" d="M29 20h3v16h-3zM35 20h1v16h-1z" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800">
                    Marchés
                  </div>
                </div>
              </button>
              <button
                className={`text-center transition-opacity ${
                  tab !== 2 && 'opacity-50 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setTab(2);
                }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path fillOpacity=".64" fill="#5091EE" d="M33 23v8h3V20H25v3z" />
                      <path fill="#2174EA" d="M20 25h11v11H20z" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800">
                    Fermes
                  </div>
                </div>
              </button>
              <button
                className={`text-center transition-opacity ${
                  tab !== 3 && 'opacity-50 hover:opacity-75'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setTab(3);
                }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path fillOpacity=".64" fill="#5091EE" d="M20 27l7-7h-7z" />
                      <path fill="#2174EA" d="M29 20l7 7v-7z" />
                      <path fillOpacity=".64" fill="#5091EE" d="M36 29l-7 7h7z" />
                      <path fill="#2174EA" d="M27 36l-7-7v7z" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800">
                    Étudiants
                  </div>
                </div>
              </button>
            </div>

            {/* Tabs items */}
            <div className="transition-all">
              <div className="relative flex flex-col" data-aos="fade-up" ref={tabs}>
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-16"
                  beforeEnter={() => heightFix()}
                >
                  <Image
                    className="mx-auto shadow-2xl"
                    src={SchoolImage}
                    width={768}
                    height={474}
                    alt="Features home 01"
                  />
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-16"
                  beforeEnter={() => heightFix()}
                >
                  <Image
                    className="mx-auto shadow-2xl"
                    src={SchoolImage}
                    width={768}
                    height={474}
                    alt="Features home 02"
                  />
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-16"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-16"
                  beforeEnter={() => heightFix()}
                >
                  <Image
                    className="mx-auto shadow-2xl"
                    src={SchoolImage}
                    width={768}
                    height={474}
                    alt="Features home 03"
                  />
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHome;
