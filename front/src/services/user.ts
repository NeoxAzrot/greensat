import axios from 'axios';
import { cache } from 'react';

import { PaginationRequest, ResponseUser } from '@/types/request';
import { User, Users } from '@/types/user';

import { API_URL } from '@/utils/constants';

interface GetUserProps {
  token: string;
  populate?: string | boolean;
}

export const getUser = cache(async ({ token, populate = false }: GetUserProps) => {
  const res: ResponseUser<User> = await axios
    .get(`${API_URL}/users/me`, {
      params: {
        populate,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((error) => {
      return error;
    });

  return res.data;
});

export const getAllUsers = cache(
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

    const res: ResponseUser<Users> = await axios
      .get(`${API_URL}/users`, {
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
