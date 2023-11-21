'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Producer } from '@/types/producer';

import Map from './map';

interface MapAndTextProps {
  producer: Producer;
}

const MapAndText = ({ producer }: MapAndTextProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(
      `https://google.com/maps/?q=${producer.attributes.latitude},${producer.attributes.longitude}`,
    );
  };

  const getUseVioletGroundText = (): string => {
    switch (producer.attributes.useVioletGround) {
      case 'yes':
        return 'Le producteur utilise le Sol Violette comme monnaie locale.';
      case 'no':
        return 'Le producteur n’utilise pas le Sol Violette et n’est pas intéressé pour utiliser cette monnaie locale.';
      case 'wouldLike':
        return 'Le producteur n’utilise pas encore le Sol Violette, mais est intéressé pour potentiellement adhérer à cette monnaie locale dans le futur.';
      default:
        return '';
    }
  };

  const useVioletGroundText = getUseVioletGroundText();

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div
            className="hidden md:block absolute top-0 left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-200"
            aria-hidden="true"
          />

          <div className="max-w-xl mx-auto md:max-w-none space-y-20">
            <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-playfair-display mb-4 text-slate-800">
                  Informations
                </h2>

                {producer.attributes.hours && (
                  <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8 whitespace-pre-wrap">
                    {producer.attributes.hours}
                  </p>
                )}

                {producer.attributes.distance && (
                  <div className="space-y-3">
                    <svg className="fill-blue-600" width="20" height="16" viewBox="0 0 20 16">
                      <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                    </svg>

                    <blockquote className="font-playfair-display text-slate-500 italic">
                      {producer.attributes.distance}
                    </blockquote>
                  </div>
                )}

                {producer.attributes.address && (
                  <a
                    href={`https://google.com/maps/?q=${producer.attributes.latitude},${producer.attributes.longitude}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex items-center mt-2">
                      <span className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out">
                        {producer.attributes.address}
                      </span>
                    </div>
                  </a>
                )}

                {producer.attributes.useVioletGround && (
                  <p className="text-slate-400 mt-6">{useVioletGroundText}</p>
                )}

                {producer.attributes.labels.data.length > 0 && (
                  <div className="flex items-center mt-2">
                    {producer.attributes.labels.data.map((label) => (
                      <div className="w-8 h-8 relative mr-3 shrink-0" key={label.id}>
                        <Image
                          src={label.attributes.url}
                          alt={label.attributes.alternativeText || label.attributes.name}
                          layout="fill"
                          objectFit="cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="shrink-0" data-aos="fade-right">
                <div className="flex justify-center items-center mx-auto w-[540px] max-w-full h-[405px]">
                  <div className="relative w-full h-full">
                    <div
                      className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10"
                      aria-hidden="true"
                    />

                    <Map
                      producers={[producer]}
                      longitude={producer.attributes.longitude}
                      latitude={producer.attributes.latitude}
                      customButton={{
                        onClick: handleClick,
                        text: "S'y rendre",
                      }}
                      noImage
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapAndText;
