'use server';

import { revalidateTag } from 'next/cache';

import { Response } from '@/types/request';
import { CreateReservation, Reservation, UpdateReservation } from '@/types/reservation';

import { TAGS } from '@/utils/constants';
import { fetchData } from '@/utils/request';

interface UpdateReservationProps {
  token: string;
  id: number;
  data: Partial<UpdateReservation>;
}

interface CreateReservationProps {
  token: string;
  data: CreateReservation;
}

export const updateReservation = async ({ token, id, data }: UpdateReservationProps) => {
  const res = await fetchData<Response<Reservation>>({
    url: `/reservations/${id}`,
    data: {
      data,
    },
    method: 'PUT',
    token,
  });

  revalidateTag(TAGS.RESERVATIONS);

  return res;
};

export const createReservation = async ({ token, data }: CreateReservationProps) => {
  const res = await fetchData<Response<Reservation>>({
    url: '/reservations',
    data: {
      data,
    },
    method: 'POST',
    token,
  });

  revalidateTag(TAGS.RESERVATIONS);

  return res;
};
