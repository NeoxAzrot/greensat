import qs from 'qs';

import { getAllUsers } from '@/services/user';

interface UserAlreadyExistsProps {
  email: string;
}

export const userAlreadyExists = async ({ email }: UserAlreadyExistsProps) => {
  const query = qs.stringify(
    {
      fields: ['confirmed', 'blocked', 'email'],
      filters: {
        email: {
          $eq: email,
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const users = await getAllUsers({
    query,
  });

  return {
    exist: users.length > 0,
    data: users[0],
  };
};
