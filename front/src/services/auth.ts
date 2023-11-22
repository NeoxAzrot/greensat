import axios from 'axios';

import { API_URL } from '@/utils/constants';

// TODO: Change any type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = async ({ email, password }: any) => {
  const res = await axios.post(`${API_URL}/api/auth/local`, {
    identifier: email,
    password,
  });

  return res.data;
};

// TODO: Change any type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const register = async ({ email, password }: any) => {
  const res = await axios.post(`${API_URL}/api/auth/local/register`, {
    email,
    password,
  });

  return res.data;
};

export const logout = async () => {
  await axios.post(`${API_URL}/api/logout`);
};
