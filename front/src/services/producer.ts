import { cache } from 'react';

import { Producer, Producers, UpdateProducer } from '@/types/producer';
import { GlobalRequest, Response } from '@/types/request';

import { axiosInstance, setAuthToken } from '@/utils/request';

interface GetOneProducerByIdProps extends GlobalRequest {
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

export const getAllProducers = cache(async ({ query }: GlobalRequest) => {
  const res: Response<Producers> = await axiosInstance.get(`/producers?${query}`).catch((error) => {
    return error;
  });

  return res.data;
});

export const getPopularProducers = cache(async () => {
  const res: Response<Producers> = await axiosInstance.get('/producers/popular').catch((error) => {
    return error;
  });

  return res.data;
});

export const getOneProducerById = cache(async ({ id, query }: GetOneProducerByIdProps) => {
  const res: Response<Producer> = await axiosInstance
    .get(`/producers/${id}?${query}`)
    .catch((error) => {
      return error;
    });

  return res.data;
});

export const getOneProducerBySlug = cache(async ({ slug }: GetOneProducerBySlugProps) => {
  const res: Response<Producer> = await axiosInstance
    .get(`/producers/slug/${slug}`)
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
