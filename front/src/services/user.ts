import axios from 'axios';
import { cache } from 'react';

import { PaginationRequest, ResponseUser } from '@/types/request';
import { UpdateUser, User, Users } from '@/types/user';

import { API_URL } from '@/utils/constants';

interface GetUserProps {
  token: string;
  populate?: string | boolean;
}

interface UpdateUserProps {
  token: string;
  id: number;
  data: Partial<UpdateUser>;
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

    const test: ResponseUser<Users> = await axios
      .get('https://api.greensatable.fr/api/users', {
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

    const test2: ResponseUser<Users> = await axios
      .get('https://www.api.greensatable.fr/api/users', {
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

    const test3: ResponseUser<Users> = await axios
      .get('https://greensatable-api.onrender.com/api/users', {
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

    console.log('test', test);
    console.log('test2', test2);
    console.log('test3', test3);

    return res.data;
  },
);

export const updateUser = cache(async ({ token, id, data }: UpdateUserProps) => {
  const res: ResponseUser<User> = await axios
    .put(
      `${API_URL}/users/${id}`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .catch((error) => {
      return error;
    });

  return res.data;
});
