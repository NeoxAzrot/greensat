import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import qs from 'qs';

import { getAllEvents, getOneEventBySlug } from '@/queries/event';

interface MetadataProps {
  params: {
    slug: string;
  };
}

interface EventProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const query = qs.stringify(
    {
      fields: ['slug'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  const events = await getAllEvents({
    query,
  });

  return events.data.map((event) => ({
    slug: event.attributes.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: MetadataProps): Promise<Metadata | undefined> => {
  const event = await getOneEventBySlug({
    slug: params.slug,
  });

  if (!event.data) return;

  const { title, summary: description, slug } = event.data.attributes;

  return {
    title,
    description,
    alternates: {
      canonical: `https://greensatable.fr/events/${slug}`,
      languages: {
        fr: `https://greensatable.fr/events/${slug}`,
      },
    },
    openGraph: {
      title,
      url: `https://greensatable.fr/events/${slug}`,
      description,
    },
    twitter: {
      title,
      description,
    },
    appLinks: {
      web: {
        url: `https://greensatable.fr/events/${slug}`,
      },
    },
  };
};

// TODO: Ajouter les évènements à venir (3 max)
const Event = async ({ params }: EventProps) => {
  const queryEvents = qs.stringify(
    {
      fields: ['slug', 'title', 'summary', 'date'],
      populate: {
        image: {
          fields: ['url', 'alternativeText'],
        },
      },
      sort: ['date'],
      pagination: {
        pageSize: 3,
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const events = await getAllEvents({
    query: queryEvents,
  });

  const event = await getOneEventBySlug({
    slug: params.slug,
  });

  if (!event.data) notFound();

  const data = event.data.attributes;

  return <></>;
};

export default Event;
