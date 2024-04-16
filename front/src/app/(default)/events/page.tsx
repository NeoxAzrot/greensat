import { Metadata } from 'next/types';
import qs from 'qs';

import CtaDark from '@/components/cta-recommendation';
import EventsList from '@/components/events';
import HeroEvents from '@/components/hero-events';
import Partners from '@/components/partners';
import PastEvents from '@/components/past-events';

import { getAllEvents } from '@/queries/event';

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
  const defaultQueryEvents = {
    fields: ['slug', 'title', 'summary', 'date', 'latitude', 'longitude', 'address', 'distance'],
    populate: {
      image: {
        fields: ['url', 'alternativeText'],
      },
    },
  };

  const queryComingEvents = qs.stringify(
    {
      fields: defaultQueryEvents.fields,
      populate: defaultQueryEvents.populate,
      filters: {
        date: {
          $gte: new Date().toISOString(),
        },
      },
      sort: ['date'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  const queryPastEvents = qs.stringify(
    {
      fields: defaultQueryEvents.fields,
      populate: defaultQueryEvents.populate,
      filters: {
        date: {
          $lt: new Date().toISOString(),
        },
      },
      sort: ['date:desc'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  const comingEvents = await getAllEvents({
    query: queryComingEvents,
  });

  const pastEvents = await getAllEvents({
    query: queryPastEvents,
  });

  return (
    <>
      <HeroEvents />
      <Partners />
      <EventsList events={comingEvents.data} />
      <PastEvents events={pastEvents.data} />
      <CtaDark />
    </>
  );
};

export default Events;
