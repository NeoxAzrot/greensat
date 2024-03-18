import { cache } from 'react';

import { GlobalRequest, ResponseChangePassword, ResponseUser } from '@/types/request';
import { SimpleAuthUser, UpdateUser, User, Users } from '@/types/user';

import { axiosInstance, setAuthToken } from '@/utils/request';

interface GetUserProps extends GlobalRequest {
  token: string;
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

export const getUser = cache(async ({ token, query }: GetUserProps) => {
  setAuthToken({ token });

  const res: ResponseUser<User> = await axiosInstance.get(`/users/me?${query}`).catch((error) => {
    return error;
  });

  return res.data;
});

export const getAllUsers = cache(async ({ query }: GlobalRequest) => {
  const res: ResponseUser<Users> = await axiosInstance.get(`/users?${query}`).catch((error) => {
    return error;
  });

  return res.data;
});

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
