'use server';

import { revalidateTag } from 'next/cache';

import { Product, UpdateProduct } from '@/types/product';
import { Response } from '@/types/request';

import { TAGS } from '@/utils/constants';
import { fetchData } from '@/utils/request';

interface UpdateProductProps {
  token: string;
  id: number;
  data: Partial<UpdateProduct>;
}

export const updateProduct = async ({ token, id, data }: UpdateProductProps) => {
  const res = await fetchData<Response<Product>>({
    url: `/products/${id}`,
    data: {
      data,
    },
    method: 'PUT',
    token,
  });

  revalidateTag(TAGS.PRODUCTS);

  return res;
};
