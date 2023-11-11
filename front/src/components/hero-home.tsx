import Link from 'next/link';

import { Producers } from '@/types/producer';

import Map from './map';

interface HeroHomeProps {
  producers: Producers;
}

const HeroHome = ({ producers }: HeroHomeProps) => {
  return (
    <section className="relative">
      {/* Dark background */}
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">
            {/* Content */}
            <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
              <h1 className="h1 font-playfair-display text-slate-100 mb-4">
                Bienvenue sur la Greensa’table !
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                Parfois, manger localement c&apos;est compliqué. Bonne nouvelle, grace à
                Greensa’table, tu pourras trouver facilement les producteurs.trices et
                commerçant.e.s qui t&apos;entourent. En plus d&apos;avoir accès à une description de
                leurs pratiques socio-environnementales, tu auras des réductions et produits
                gratuits !
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group"
                    href="/producers"
                  >
                    Voir la carte{' '}
                    <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn text-white bg-slate-700 hover:bg-slate-800 w-full"
                    href="/about"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <div className="shrink-0" data-aos="fade-left">
              <div className="flex justify-center items-center">
                <div className="relative">
                  <div
                    className="absolute inset-0 pointer-events-none border-2 border-slate-700 mt-3 ml-3 translate-x-4 translate-y-4 -z-10"
                    aria-hidden="true"
                  ></div>
                  <Map producers={producers} height="405px" width="540px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
