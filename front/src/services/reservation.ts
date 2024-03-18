import { cache } from 'react';

import { GlobalRequest, Response } from '@/types/request';
import {
  CreateReservation,
  Reservation,
  Reservations,
  UpdateReservation,
} from '@/types/reservation';

import { axiosInstance, setAuthToken } from '@/utils/request';

interface UpdateReservationProps {
  token: string;
  id: number;
  data: Partial<UpdateReservation>;
}

interface CreateReservationProps {
  token: string;
  data: CreateReservation;
}

export const getAllReservations = cache(async ({ query }: GlobalRequest) => {
  const res: Response<Reservations> = await axiosInstance
    .get(`/reservations?${query}`)
    .catch((error) => {
      return error;
    });

  return res.data;
});

export const updateReservation = cache(async ({ token, id, data }: UpdateReservationProps) => {
  setAuthToken({ token });

  const res: Response<Reservation> = await axiosInstance
    .put(`/reservations/${id}`, { data })
    .catch((error) => {
      return error;
    });

  return res.data;
});

export const createReservation = cache(async ({ token, data }: CreateReservationProps) => {
  setAuthToken({ token });

  const res: Response<Reservation> = await axiosInstance
    .post('/reservations', { data })
    .catch((error) => {
      return error;
    });

  return res.data;
});
