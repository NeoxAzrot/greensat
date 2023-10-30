import axios from 'axios';

import { Producer, Producers } from '@/types/producer';
import { PaginationRequest, Response } from '@/types/request';

import { API_URL } from '@/utils/constants';

interface GetOneProducerByIdProps {
  id: number;
}

interface GetOneProducerBySlugProps {
  slug: string;
}

export const getAllProducers = async ({ page = 1, pageSize = 25, sort }: PaginationRequest) => {
  const res: Response<Producers> = await axios
    .get(`${API_URL}/api/producers`, {
      params: {
        'pagination[pageSize]': pageSize,
        'pagination[page]': page,
        sort,
      },
    })
    .catch((error) => {
      return error;
    });

  return res.data;
};

export const getOneProducerById = async ({ id }: GetOneProducerByIdProps) => {
  const res: Response<Producer> = await axios
    .get(`${API_URL}/api/producers/${id}`, {
      params: {
        populate: '*',
      },
    })
    .catch((error) => {
      return error;
    });

  return res.data;
};

export const getOneProducerBySlug = async ({ slug }: GetOneProducerBySlugProps) => {
  const res: Response<Producers> = await axios
    .get(`${API_URL}/api/producers/slug/${slug}`, {
      params: {
        populate: '*',
      },
    })
    .catch((error) => {
      return error;
    });

  return res.data;
};
