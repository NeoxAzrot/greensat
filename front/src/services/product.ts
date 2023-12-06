import { cache } from 'react';

import { Product, Products, UpdateProduct } from '@/types/product';
import { PaginationRequest, Response } from '@/types/request';

import { axiosInstance, setAuthToken } from '@/utils/request';

interface GetOneProductByIdProps {
  id: number;
}

interface UpdateProductProps {
  token: string;
  id: number;
  data: Partial<UpdateProduct>;
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

    const res: Response<Products> = await axiosInstance
      .get('/products', {
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
  const res: Response<Product> = await axiosInstance
    .get(`/products/${id}`, {
      params: {
        populate: '*',
      },
    })
    .catch((error) => {
      return error;
    });

  return res.data;
});

export const updateProduct = cache(async ({ token, id, data }: UpdateProductProps) => {
  setAuthToken({ token });

  const res: Response<Product> = await axiosInstance
    .put(`/products/${id}`, { data })
    .catch((error) => {
      return error;
    });

  return res.data;
});
