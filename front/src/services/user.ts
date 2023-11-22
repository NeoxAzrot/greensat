import axios from 'axios';

import { API_URL } from '@/utils/constants';

export const updateUser = () => {
  return null;
};

export const getUser = async () => {
  const res = await axios.get(`${API_URL}/api/users/me`);

  return res.data;
};
