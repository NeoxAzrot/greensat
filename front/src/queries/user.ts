import { cache } from 'react';

import { GlobalRequest } from '@/types/request';
import { User, Users } from '@/types/user';

import { TAGS } from '@/utils/constants';
import { fetchData } from '@/utils/request';

interface GetUserProps extends GlobalRequest {
  token: string;
}

export const getUser = cache(async ({ token, query }: GetUserProps) => {
  const res = await fetchData<User>({
    url: '/users/me',
    query,
    tags: [TAGS.ME],
    token,
  });

  return res;
});

export const getAllUsers = cache(async ({ query }: GlobalRequest) => {
  const res = await fetchData<Users>({
    url: '/users',
    query,
    tags: [TAGS.USERS],
  });

  return res;
});
