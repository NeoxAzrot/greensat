import { Metadata } from 'next/types';

import Hero from '@/components/hero';

export const metadata: Metadata = {
  title: 'Au coeur des évènements verts',
  description:
    "Rejoins les évènements locaux organisés près de l'ENSAT et connecte-toi avec notre communauté engagée. Ensemble, faisons la différence pour un futur durable.",
  alternates: {
    canonical: 'https://greensatable.fr/events',
    languages: {
      fr: 'https://greensatable.fr/events',
    },
  },
  openGraph: {
    title: 'Au coeur des évènements verts',
    url: 'https://greensatable.fr/events',
    description:
      "Rejoins les évènements locaux organisés près de l'ENSAT et connecte-toi avec notre communauté engagée. Ensemble, faisons la différence pour un futur durable.",
  },
  twitter: {
    title: 'Au coeur des évènements verts',
    description:
      "Rejoins les évènements locaux organisés près de l'ENSAT et connecte-toi avec notre communauté engagée. Ensemble, faisons la différence pour un futur durable.",
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/events',
    },
  },
};

const Events = async () => {
  // const query = qs.stringify(
  //   {
  //     fields: ['slug', 'title'],
  //     sort: ['title'],
  //   },
  //   {
  //     encodeValuesOnly: true,
  //   },
  // );

  // const producers = await getAllProducers({
  //   query,
  // });

  return (
    <>
      <Hero title="Test" />
    </>
  );
};

export default Events;
