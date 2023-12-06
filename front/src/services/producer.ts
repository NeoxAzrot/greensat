import { cache } from 'react';

import { Producer, Producers, UpdateProducer } from '@/types/producer';
import { PaginationRequest, Response } from '@/types/request';

import { axiosInstance, setAuthToken } from '@/utils/request';

interface GetOneProducerByIdProps {
  id: number;
}

interface GetOneProducerBySlugProps {
  slug: string;
}

interface UpdateProducerProps {
  token: string;
  id: number;
  data: Partial<UpdateProducer>;
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

    const res: Response<Producers> = await axiosInstance
      .get('/producers', {
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
  const res: Response<Producers> = await axiosInstance
    .get('/producers/popular', {
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
  const res: Response<Producer> = await axiosInstance
    .get(`/producers/${id}`, {
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
  const res: Response<Producer> = await axiosInstance
    .get(`/producers/slug/${slug}`, {
      params: {
        populate: '*',
      },
    })
    .catch((error) => {
      return error;
    });

  return res.data;
});

export const updateProducer = cache(async ({ token, id, data }: UpdateProducerProps) => {
  setAuthToken({ token });

  const res: Response<Producer> = await axiosInstance
    .put(`/producers/${id}`, { data })
    .catch((error) => {
      return error;
    });

  return res.data;
});
