import { cache } from 'react';

import { GlobalRequest, Response } from '@/types/request';
import { Reservations } from '@/types/reservation';

import { TAGS } from '@/utils/constants';
import { fetchData } from '@/utils/request';

export const getAllReservations = cache(async ({ query }: GlobalRequest) => {
  const res = await fetchData<Response<Reservations>>({
    url: '/reservations',
    query,
    tags: [TAGS.RESERVATIONS],
  });

  return res;
});
