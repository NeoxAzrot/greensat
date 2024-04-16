import { cache } from 'react';

import { Event, Events } from '@/types/event';
import { GlobalRequest, Response } from '@/types/request';

import { TAGS } from '@/utils/constants';
import { fetchData } from '@/utils/request';

interface GetOneEventByIdProps extends GlobalRequest {
  id: number;
}

interface GetOneEventBySlugProps {
  slug: string;
}

export const getAllEvents = cache(async ({ query }: GlobalRequest) => {
  const res = await fetchData<Response<Events>>({
    url: '/events',
    query,
    tags: [TAGS.EVENTS],
  });

  return res;
});

export const getOneEventById = cache(async ({ id, query }: GetOneEventByIdProps) => {
  const res = await fetchData<Response<Event>>({
    url: `/events/${id}`,
    query,
    tags: [TAGS.EVENTS, TAGS.EVENTS_ID(id)],
  });

  return res;
});

export const getOneEventBySlug = cache(async ({ slug }: GetOneEventBySlugProps) => {
  const res = await fetchData<Response<Event>>({
    url: `/events/slug/${slug}`,
    tags: [TAGS.EVENTS, TAGS.EVENTS_SLUG(slug)],
  });

  return res;
});
