import { cache } from 'react';

import { Product, Products } from '@/types/product';
import { GlobalRequest, Response } from '@/types/request';

import { TAGS } from '@/utils/constants';
import { fetchData } from '@/utils/request';

interface GetOneProductByIdProps extends GlobalRequest {
  id: number;
}

export const getAllProducts = cache(async ({ query }: GlobalRequest) => {
  const res = await fetchData<Response<Products>>({
    url: '/products',
    query,
    tags: [TAGS.PRODUCTS],
  });

  return res;
});

export const getOneProductById = cache(async ({ id, query }: GetOneProductByIdProps) => {
  const res = await fetchData<Response<Product>>({
    url: `/products/${id}`,
    query,
    tags: [TAGS.PRODUCTS, TAGS.PRODUCTS_ID(id)],
  });

  return res;
});
