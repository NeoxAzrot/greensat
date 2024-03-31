import { cache } from 'react';

import { Producer, Producers } from '@/types/producer';
import { GlobalRequest, Response } from '@/types/request';

import { TAGS } from '@/utils/constants';
import { fetchData } from '@/utils/request';

interface GetOneProducerByIdProps extends GlobalRequest {
  id: number;
}

interface GetOneProducerBySlugProps {
  slug: string;
}

export const getAllProducers = cache(async ({ query }: GlobalRequest) => {
  const res = await fetchData<Response<Producers>>({
    url: '/producers',
    query,
    tags: [TAGS.PRODUCERS],
  });

  return res;
});

export const getPopularProducers = cache(async () => {
  const res = await fetchData<Response<Producers>>({
    url: '/producers/popular',
    tags: [TAGS.PRODUCERS, TAGS.PRODUCERS_POPULAR],
  });

  return res;
});

export const getOneProducerById = cache(async ({ id, query }: GetOneProducerByIdProps) => {
  const res = await fetchData<Response<Producer>>({
    url: `/producers/${id}`,
    query,
    tags: [TAGS.PRODUCERS, TAGS.PRODUCERS_ID(id)],
  });

  return res;
});

export const getOneProducerBySlug = cache(async ({ slug }: GetOneProducerBySlugProps) => {
  const res = await fetchData<Response<Producer>>({
    url: `/producers/slug/${slug}`,
    tags: [TAGS.PRODUCERS, TAGS.PRODUCERS_SLUG(slug)],
  });

  return res;
});
