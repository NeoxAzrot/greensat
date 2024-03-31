'use server';

import { revalidateTag } from 'next/cache';
import 'react';
import { v4 as uuidv4 } from 'uuid';

import { FormForgotPassword, FormLogin, FormRegister, FormResetPassword } from '@/types/form';
import { ResponseUser, ResponseUserJwt } from '@/types/request';
import { SimpleAuthUser } from '@/types/user';

import { TAGS } from '@/utils/constants';
import { fetchData } from '@/utils/request';

interface ForgotPasswordResponse {
  ok: boolean;
}

export const login = async ({ email, password }: FormLogin) => {
  const res = await fetchData<ResponseUserJwt<SimpleAuthUser>>({
    url: '/auth/local',
    data: {
      identifier: email,
      password,
    },
    method: 'POST',
  });

  revalidateTag(TAGS.ME);

  return res;
};

export const register = async ({
  firstname,
  lastname,
  studentNumber,
  email,
  phoneNumber,
  password,
}: FormRegister) => {
  const userUUID = uuidv4();

  const res = await fetchData<ResponseUser<SimpleAuthUser>>({
    url: '/auth/local/register',
    data: {
      username: userUUID,
      firstname,
      lastname,
      studentNumber,
      email,
      phoneNumber,
      password,
    },
    method: 'POST',
  });

  revalidateTag(TAGS.USERS);

  return res;
};

export const forgotPassword = async ({ email }: FormForgotPassword) => {
  const res = await fetchData<ForgotPasswordResponse>({
    url: '/auth/forgot-password',
    data: {
      email,
    },
    method: 'POST',
  });

  return res;
};

export const resetPassword = async ({
  code,
  password,
  passwordConfirmation,
}: FormResetPassword) => {
  const res = await fetchData<ResponseUserJwt<SimpleAuthUser>>({
    url: '/auth/reset-password',
    data: {
      code,
      password,
      passwordConfirmation,
    },
    method: 'POST',
  });

  revalidateTag(TAGS.ME);

  return res;
};
