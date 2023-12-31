import { cache } from 'react';

import { PaginationRequest, ResponseChangePassword, ResponseUser } from '@/types/request';
import { SimpleAuthUser, UpdateUser, User, Users } from '@/types/user';

import { axiosInstance, setAuthToken } from '@/utils/request';

interface GetUserProps {
  token: string;
  populate?: string | boolean;
}

interface UpdateUserProps {
  token: string;
  id: number;
  data: Partial<UpdateUser>;
}

interface ChangePasswordUserProps {
  token: string;
  data: {
    currentPassword: string;
    password: string;
    passwordConfirmation: string;
  };
}

export const getUser = cache(async ({ token, populate = false }: GetUserProps) => {
  setAuthToken({ token });

  const res: ResponseUser<User> = await axiosInstance
    .get(`/users/me`, {
      params: {
        populate,
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

    const res: ResponseUser<Users> = await axiosInstance
      .get('/users', {
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

export const updateUser = cache(async ({ token, id, data }: UpdateUserProps) => {
  setAuthToken({ token });

  const res: ResponseUser<User> = await axiosInstance.put(`/users/${id}`, data).catch((error) => {
    return error;
  });

  return res.data;
});

export const changePasswordUser = cache(async ({ token, data }: ChangePasswordUserProps) => {
  setAuthToken({ token });

  const res: ResponseChangePassword<SimpleAuthUser> = await axiosInstance
    .post('/auth/change-password', data)
    .catch((error) => {
      return error;
    });

  return res.data;
});
