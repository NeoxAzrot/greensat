import axios from 'axios';

import { API_URL } from '@/utils/constants';

// TODO: Change any type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const signIn = async ({ email, password }: any) => {
  const res = await axios.post(`${API_URL}/api/auth/local`, {
    identifier: email,
    password,
  });

  return res.data;
};
