import axios from 'axios';

import { API_URL } from '@/utils/constants';

interface SetAuthTokenProps {
  token: string;
}

export const axiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
});

export const setAuthToken = ({ token }: SetAuthTokenProps) => {
  if (token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};
