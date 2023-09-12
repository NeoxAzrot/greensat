'use client';

import mapboxgl from 'mapbox-gl';
import { createRef, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Post, allPosts } from 'contentlayer/generated';

const Marker = ({ onClick, children, feature, router }: any) => {
  const _onClick = () => {
    // onClick(feature.title);
    router.push(`/blog/${feature.slug}`);
  };

  return (
    <button
      onClick={_onClick}
      style={{
        backgroundColor: '#4CAF50',
        border: '1px solid blue',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '4px 2px',
        borderRadius: '50%',
      }}
    >
      {children}
    </button>
  );
};

export default function Map({
  allPosts,
  router,
}: {
  allPosts: Post[];
  router: any;
}) {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(1.48);
  const [lat, setLat] = useState(43.53);
  const [zoom, setZoom] = useState(12);

  // TODO: Change it
  mapboxgl.accessToken =
    'pk.eyJ1IjoibmVveGF6cm90IiwiYSI6ImNsbTNrYm1tMTFvemgzcW1oYWsyZmQyY2gifQ.cY6WcctgpXrMGp_vH8iIAw';

  const markerClicked = (title: any) => {
    window.alert(title);
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current as any,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false,
    });

    allPosts.forEach((feature) => {
      const ref = createRef();
      (ref.current as HTMLElement) = document.createElement('div') as any;

      createRoot(ref.current as any).render(
        <Marker onClick={markerClicked} feature={feature} router={router} />
      );

      new mapboxgl.Marker(ref.current as any)
        .setLngLat({ lat: feature.lat, lng: feature.lng })
        .addTo(map);
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => map.remove();
  }, []);

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
}
