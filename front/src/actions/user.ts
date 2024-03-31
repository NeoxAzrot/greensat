'use server';

import { revalidateTag } from 'next/cache';

import { ResponseUserJwt } from '@/types/request';
import { SimpleAuthUser, UpdateUser, User } from '@/types/user';

import { TAGS } from '@/utils/constants';
import { fetchData } from '@/utils/request';
import { revalidateTags } from '@/utils/revalidate';

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

export const updateUser = async ({ token, id, data }: UpdateUserProps) => {
  const res = await fetchData<User>({
    url: `/users/${id}`,
    data,
    method: 'PUT',
    token,
  });

  revalidateTags([TAGS.USERS, TAGS.ME]);

  return res;
};

export const changePasswordUser = async ({ token, data }: ChangePasswordUserProps) => {
  const res = await fetchData<ResponseUserJwt<SimpleAuthUser>>({
    url: '/auth/change-password',
    data,
    method: 'POST',
    token,
  });

  revalidateTag(TAGS.ME);

  return res;
};
