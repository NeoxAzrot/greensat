import axios from 'axios';
import { cache } from 'react';

import { Producer, Producers } from '@/types/producer';
import { PaginationRequest, Response } from '@/types/request';

import { API_URL } from '@/utils/constants';

interface GetOneProducerByIdProps {
  id: number;
}

interface GetOneProducerBySlugProps {
  slug: string;
}

export const getAllProducers = cache(
  async ({ page, pageSize, sort, populate = false, filters }: PaginationRequest) => {
    const newFilters = Object.entries(filters || {}).reduce(
      (acc, [key, value]) => {
        if (value) {
          acc[`filters${key}`] = value;
        }

        return acc;
      },
      {} as Record<string, string>,
    );

    const res: Response<Producers> = await axios
      .get(`${API_URL}/producers`, {
        params: {
          'pagination[pageSize]': pageSize,
          'pagination[page]': page,
          sort,
          populate,
          ...newFilters,
        },
      })
      .catch((error) => {
        return error;
      });

    return res.data;
  },
);

export const getPopularProducers = cache(async () => {
  const res: Response<Producers> = await axios
    .get(`${API_URL}/producers/popular`, {
      params: {
        populate: '*',
      },
    })
    .catch((error) => {
      return error;
    });

  return res.data;
});

export const getOneProducerById = cache(async ({ id }: GetOneProducerByIdProps) => {
  const res: Response<Producer> = await axios
    .get(`${API_URL}/producers/${id}`, {
      params: {
        populate: '*',
      },
    })
    .catch((error) => {
      return error;
    });

  return res.data;
});

export const getOneProducerBySlug = cache(async ({ slug }: GetOneProducerBySlugProps) => {
  const res: Response<Producer> = await axios
    .get(`${API_URL}/producers/slug/${slug}`, {
      params: {
        populate: '*',
      },
    })
    .catch((error) => {
      return error;
    });

  return res.data;
});
