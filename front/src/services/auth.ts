import axios from 'axios';

import { API_URL } from '@/utils/constants';

export const signIn = async ({ email, password }) => {
  const res = await axios.post(`${API_URL}/api/auth/local`, {
    identifier: email,
    password,
  });

  return res.data;
};
