'use client';

import { Post } from 'contentlayer/generated';
import mapboxgl from 'mapbox-gl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { createRef, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

import FarmIcon from '@/public/images/icons/farm-removebg.png';
import MarketIcon from '@/public/images/icons/market-removebg.png';
import StoreIcon from '@/public/images/icons/store-removebg.png';

// TODO: Change type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Marker = ({ post }: any) => {
  const getIcon = () => {
    switch (post.businessType) {
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

const Map = ({ allPosts }: { allPosts: Post[] }) => {
  const mapContainer = useRef(null);

  const lng = 1.4947801;
  const lat = 43.5277825;
  const zoom = 13;
  // const [lng, setLng] = useState(1.4947801);
  // const [lat, setLat] = useState(43.5277825);
  // const [zoom, setZoom] = useState(13);

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

    allPosts.forEach((post) => {
      const ref = createRef();
      // TODO: Change type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (ref.current as HTMLElement) = document.createElement('div') as any;

      // TODO: Change type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      createRoot(ref.current as any).render(<Marker post={post} />);

      const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: false,
      });

      const handleClose = () => {
        popup.remove();
      };

      const handleClick = () => {
        router.push(`/producers/${post.slug}`);
      };

      const wrapper = document.createElement('div');
      wrapper.className = 'flex flex-col';

      const closeButton = document.createElement('button');
      closeButton.className =
        'absolute top-0 right-0 w-4 h-4 font-inter font-medium text-slate-500 text-sm';
      closeButton.onclick = handleClose;
      closeButton.innerHTML = '&times;';

      const image = document.createElement('img');
      image.src = post.image;
      image.alt = post.title;
      image.className = 'w-full aspect-square object-cover my-2';

      const title = document.createElement('h4');
      title.className = 'text-xl font-medium mb-1 font-playfair-display';
      title.innerHTML = post.title;

      const address = document.createElement('p');
      address.className = 'text-sm text-gray-500 mb-2 font-inter';
      address.innerHTML = post.address;

      const button = document.createElement('button');
      button.onclick = handleClick;
      button.className =
        'font-inter font-medium flex items-center group text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out';
      button.innerHTML =
        'Découvrir le producteur <span class="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>';

      wrapper.appendChild(closeButton);
      wrapper.appendChild(image);
      wrapper.appendChild(title);
      wrapper.appendChild(address);
      wrapper.appendChild(button);

      popup.setDOMContent(wrapper);

      // TODO: Change type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new mapboxgl.Marker(ref.current as any)
        .setLngLat({ lat: post.lat, lng: post.lng })
        .setPopup(popup)
        .addTo(map);
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => map.remove();
  });

  return (
    <section className="relative">
      <div
        ref={mapContainer}
        style={{
          height: '700px',
        }}
      />
    </section>
  );
};

export default Map;
