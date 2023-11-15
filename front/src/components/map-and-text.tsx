'use client';

import mapboxgl from 'mapbox-gl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createRef, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import FarmIcon from '@/public/images/icons/farm.webp';
import MarketIcon from '@/public/images/icons/market.webp';
import StoreIcon from '@/public/images/icons/store.webp';

import { Producer } from '@/types/producer';

// TODO: Change type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Marker = ({ producer }: { producer: Producer }) => {
  const getIcon = () => {
    switch (producer.attributes.businessType) {
      case 'farm':
        return FarmIcon;
      case 'market':
        return MarketIcon;
      case 'store':
        return StoreIcon;

      default:
        return StoreIcon;
    }
  };

  const icon = getIcon();

  return (
    <Image
      className="w-full aspect-square object-cover"
      src={icon}
      width={36}
      height={36}
      alt="News 03"
    />
  );
};

// TODO: Call component Map instead of add it again there
const MapAndText = ({ producer }: { producer: Producer }) => {
  const mapContainer = useRef(null);

  const lng = producer.attributes.longitude;
  const lat = producer.attributes.latitude;
  const zoom = 13;

  const router = useRouter();

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN as string;

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      // TODO: Change type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      container: mapContainer.current as any,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
    });

    const ref = createRef();
    // TODO: Change type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (ref.current as HTMLElement) = document.createElement('div') as any;

    // TODO: Change type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    createRoot(ref.current as any).render(<Marker producer={producer} />);

    const popup = new mapboxgl.Popup({
      offset: 25,
      closeButton: false,
    });

    const handleClose = () => {
      popup.remove();
    };

    const handleClick = () => {
      router.push(
        `https://google.com/maps/?q=${producer.attributes.latitude},${producer.attributes.longitude}`,
      );
    };

    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col';

    const closeButton = document.createElement('button');
    closeButton.className =
      'absolute top-0 right-0 w-4 h-4 font-inter font-medium text-slate-500 text-sm';
    closeButton.onclick = handleClose;
    closeButton.innerHTML = '&times;';

    const image = document.createElement('img');
    image.src = producer.attributes.image.data.attributes.url;
    image.alt = producer.attributes.title;
    image.className = 'w-full aspect-square object-cover my-2';

    const title = document.createElement('h4');
    title.className = 'text-xl font-medium mb-1 font-playfair-display';
    title.innerHTML = producer.attributes.title;

    const address = document.createElement('p');
    address.className = 'text-sm text-gray-500 mb-2 font-inter';
    address.innerHTML = producer.attributes.address;

    const button = document.createElement('button');
    button.onclick = handleClick;
    button.className =
      'font-inter font-medium flex items-center group text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out';
    button.innerHTML =
      'S\'y rendre <span class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>';

    wrapper.appendChild(closeButton);
    wrapper.appendChild(title);
    wrapper.appendChild(address);
    wrapper.appendChild(button);

    popup.setDOMContent(wrapper);

    // TODO: Change type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    new mapboxgl.Marker(ref.current as any)
      .setLngLat({ lat: producer.attributes.latitude, lng: producer.attributes.longitude })
      .setPopup(popup)
      .addTo(map);

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => map.remove();
  });

  const getUseVioletGroundText = () => {
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
          {/* Line */}
          <div
            className="hidden md:block absolute top-0 left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-200"
            aria-hidden="true"
          ></div>

          {/* Customers */}
          <div className="max-w-xl mx-auto md:max-w-none space-y-20">
            {/* 1st Customer */}
            <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:space-x-reverse lg:space-x-reverse xl:space-x-reverse md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:min-w-[30rem]" data-aos="fade-left">
                <h2 className="h3 md:text-4xl font-playfair-display mb-4">
                  <p className="text-slate-800">Informations</p>
                </h2>
                {producer.attributes.hours && (
                  <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
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
                          className="rounded-full"
                          src={label.attributes.url}
                          alt={label.attributes.alternativeText || label.attributes.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="flex justify-center items-center" data-aos="fade-right">
                <div className="relative">
                  <div
                    className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10"
                    aria-hidden="true"
                  ></div>
                  <div
                    ref={mapContainer}
                    className="mx-auto md:max-w-none"
                    style={{
                      height: '405px',
                      width: '540px',
                    }}
                  />
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
