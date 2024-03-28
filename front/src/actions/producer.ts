'use server';

import { revalidateTag } from 'next/cache';

import { Producer, UpdateProducer } from '@/types/producer';
import { Response } from '@/types/request';

import { TAGS } from '@/utils/constants';
import { fetchData } from '@/utils/request';

interface UpdateProducerProps {
  token: string;
  id: number;
  data: Partial<UpdateProducer>;
}

export const updateProducer = async ({ token, id, data }: UpdateProducerProps) => {
  const res = await fetchData<Response<Producer>>({
    url: `/producers/${id}`,
    data: {
      data,
    },
    method: 'PUT',
    token,
  });

  revalidateTag(TAGS.PRODUCERS);

  return res;
};
