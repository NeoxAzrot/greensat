'use client';

import mapboxgl, { Map as MapType } from 'mapbox-gl';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import FarmIcon from '@/public/images/icons/farm.webp';
import MarketIcon from '@/public/images/icons/market.webp';
import StoreIcon from '@/public/images/icons/store.webp';

import { Producer, Producers } from '@/types/producer';

interface MapProps {
  producers: Producers;
  longitude?: number;
  latitude?: number;
  customButton?: {
    text?: string;
    onClick?: () => void;
  };
  noImage?: boolean;
}

interface MarkerProps {
  producer: Producer;
}

const Marker = ({ producer }: MarkerProps) => {
  const getIcon = (): StaticImageData => {
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
      loading="lazy"
      alt={producer.attributes.title}
    />
  );
};

const Map = ({ producers, longitude, latitude, customButton, noImage }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<MapType | null>(null);

  const lng = longitude || 1.4947801;
  const lat = latitude || 43.5277825;
  const zoom = 13;

  const router = useRouter();

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN as string;

  useEffect(() => {
    if (!mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
    });

    producers.forEach((producer) => {
      const markerElement = document.createElement('div');

      createRoot(markerElement).render(<Marker producer={producer} />);

      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
      });

      const handleClose = () => {
        popup.remove();
      };

      const handleClick = () => {
        router.push(`/producers/${producer.attributes.slug}`);
      };

      const wrapper = document.createElement('div');
      wrapper.className = 'flex flex-col';

      const closeButton = document.createElement('button');
      closeButton.className =
        'absolute top-0 right-0 w-4 h-4 font-inter font-medium text-slate-500 text-sm outline-none';
      closeButton.onclick = handleClose;
      closeButton.innerHTML = '&times;';

      const title = document.createElement('h4');
      title.className = 'text-xl font-medium mb-1 font-playfair-display';
      title.innerHTML = producer.attributes.title;

      const address = document.createElement('p');
      address.className = 'text-sm text-gray-500 mb-2 font-inter';
      address.innerHTML = producer.attributes.address;

      const button = document.createElement('button');
      button.onclick = customButton?.onClick || handleClick;
      button.className =
        'font-inter font-medium flex items-center group text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out';
      button.innerHTML = `${
        customButton?.text || 'Découvrir le producteur'
      } <span class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>`;

      wrapper.appendChild(closeButton);

      if (!noImage) {
        const imageContainer = document.createElement('div');
        imageContainer.className =
          'relative block group overflow-hidden my-2 w-full cursor-pointer';
        imageContainer.onclick = customButton?.onClick || handleClick;

        const image = document.createElement('img');
        image.src = producer.attributes.image.data.attributes.url;
        image.alt = producer.attributes.title;
        image.className =
          'w-full aspect-square object-cover group-hover:scale-105 transition duration-700 ease-out';

        imageContainer.appendChild(image);

        const featuredProducerProducts = producer.attributes.products.data.filter(
          (product) => product.attributes.active && product.attributes.count > 0,
        );

        if (featuredProducerProducts.length > 0) {
          const featuredProducerProductsContainer = document.createElement('div');
          featuredProducerProductsContainer.className = 'absolute top-4 right-4';

          const svgNS = 'http://www.w3.org/2000/svg';

          const featuredProducerProductsIcon = document.createElementNS(svgNS, 'svg');
          featuredProducerProductsIcon.setAttribute('class', 'w-8 h-8');
          featuredProducerProductsIcon.setAttribute('viewBox', '0 0 512 512');

          const featuredProducerProductsIconCircle = document.createElementNS(svgNS, 'circle');
          featuredProducerProductsIconCircle.setAttribute('class', 'fill-slate-900');
          featuredProducerProductsIconCircle.setAttribute('fill-opacity', '0.48');
          featuredProducerProductsIconCircle.setAttribute('cx', '256');
          featuredProducerProductsIconCircle.setAttribute('cy', '256');
          featuredProducerProductsIconCircle.setAttribute('r', '256');

          const featuredProducerProductsIconPath = document.createElementNS(svgNS, 'path');
          featuredProducerProductsIconPath.setAttribute('class', 'fill-yellow-500');
          featuredProducerProductsIconPath.setAttribute(
            'd',
            'm231.07,185.86l13.05,22.2h-27.49c-8.29,0-15-6.71-15-15s6.71-15,15-15h.82c5.59,0,10.8,2.96,13.61,7.8Zm-47.44,7.2c0,5.4,1.31,10.5,3.6,15h-15.6c-6.64,0-12,5.36-12,12v24c0,6.64,5.36,12,12,12h168c6.64,0,12-5.36,12-12v-24c0-6.64-5.36-12-12-12h-15.6c2.29-4.5,3.6-9.6,3.6-15,0-18.22-14.77-33-33-33h-.83c-11.96,0-23.06,6.34-29.14,16.65l-9.04,15.41-9.04-15.38c-6.07-10.35-17.17-16.69-29.14-16.69h-.82c-18.22,0-33,14.78-33,33Zm126,0c0,8.29-6.71,15-15,15h-27.49l13.05-22.2c2.85-4.84,8.02-7.8,13.61-7.8h.83c8.29,0,15,6.71,15,15Zm-138,75v66c0,9.94,8.06,18,18,18h54v-84h-72Zm96,84h54c9.94,0,18-8.06,18-18v-66h-72v84Z',
          );

          featuredProducerProductsIcon.appendChild(featuredProducerProductsIconCircle);
          featuredProducerProductsIcon.appendChild(featuredProducerProductsIconPath);
          featuredProducerProductsContainer.appendChild(featuredProducerProductsIcon);

          imageContainer.appendChild(featuredProducerProductsContainer);
        }

        wrapper.appendChild(imageContainer);
      }

      wrapper.appendChild(title);
      wrapper.appendChild(address);
      wrapper.appendChild(button);

      popup.setDOMContent(wrapper);

      new mapboxgl.Marker(markerElement)
        .setLngLat({ lat: producer.attributes.latitude, lng: producer.attributes.longitude })
        .setPopup(popup)
        .addTo(map.current as MapType);
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => map.current?.remove();
  }, [customButton?.onClick, customButton?.text, lat, lng, noImage, producers, router]);

  useEffect(() => {
    const resizeMap = () => map.current?.resize();

    const observer = new ResizeObserver(resizeMap);
    const currentMapContainer = mapContainer.current;

    if (currentMapContainer) {
      observer.observe(currentMapContainer);
    }

    return () => {
      if (currentMapContainer) {
        observer.unobserve(currentMapContainer);
      }
    };
  }, []);

  return (
    <section className="relative h-full w-full">
      <div ref={mapContainer} className="h-full w-full" />
    </section>
  );
};

export default Map;
