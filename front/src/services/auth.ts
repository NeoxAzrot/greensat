import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const signIn = async ({ email, password }) => {
  const res = await axios.post(`${API_URL}/api/auth/local`, {
    identifier: email,
    password,
  });

  return res.data;
};
