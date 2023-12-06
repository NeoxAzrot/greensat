import { cache } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { FormForgotPassword, FormLogin, FormRegister, FormResetPassword } from '@/types/form';
import { ResponseLogin, ResponseRegister, ResponseUser } from '@/types/request';
import { SimpleAuthUser } from '@/types/user';

import { axiosInstance } from '@/utils/request';

interface ForgotPasswordResponse {
  ok: boolean;
}

export const login = cache(async ({ email, password }: FormLogin) => {
  const res: ResponseLogin<SimpleAuthUser> = await axiosInstance
    .post('/auth/local', {
      identifier: email,
      password,
    })
    .catch((error) => {
      return error;
    });

  return res.data;
});

export const register = cache(
  async ({ firstname, lastname, studentNumber, email, phoneNumber, password }: FormRegister) => {
    const userUUID = uuidv4();

    const res: ResponseRegister<SimpleAuthUser> = await axiosInstance
      .post('/auth/local/register', {
        username: userUUID,
        firstname,
        lastname,
        studentNumber,
        email,
        phoneNumber,
        password,
      })
      .catch((error) => {
        return error;
      });

    return res.data;
  },
);

export const forgotPassword = cache(async ({ email }: FormForgotPassword) => {
  const res: ResponseUser<ForgotPasswordResponse> = await axiosInstance
    .post('/auth/forgot-password', {
      email,
    })
    .catch((error) => {
      return error;
    });

  return res.data;
});

export const resetPassword = cache(
  async ({ code, password, passwordConfirmation }: FormResetPassword) => {
    const res: ResponseRegister<SimpleAuthUser> = await axiosInstance
      .post('/auth/reset-password', {
        code,
        password,
        passwordConfirmation,
      })
      .catch((error) => {
        return error;
      });

    return res.data;
  },
);
