import axios from 'axios';
import { cache } from 'react';

import { Product, Products } from '@/types/product';
import { PaginationRequest, Response } from '@/types/request';

import { API_URL } from '@/utils/constants';

interface GetOneProductByIdProps {
  id: number;
}

export const getAllProducts = cache(
  async ({ page, pageSize, sort, populate = false, filters }: PaginationRequest) => {
    const newFilters = Object.entries(filters || {}).reduce(
      (acc, [key, value]) => {
        if (value) {
          acc[`filters${key}`] = value;
        }

        return acc;
      },
      {} as Record<string, string>,
    );

    const res: Response<Products> = await axios
      .get(`${API_URL}/products`, {
        params: {
          'pagination[pageSize]': pageSize,
          'pagination[page]': page,
          sort,
          populate,
          ...newFilters,
        },
      })
      .catch((error) => {
        return error;
      });

    return res.data;
  },
);

export const getOneProductById = cache(async ({ id }: GetOneProductByIdProps) => {
  const res: Response<Product> = await axios
    .get(`${API_URL}/products/${id}`, {
      params: {
        populate: '*',
      },
    })
    .catch((error) => {
      return error;
    });

  return res.data;
});
