import { cache } from 'react';

import { Product, Products, UpdateProduct } from '@/types/product';
import { GlobalRequest, Response } from '@/types/request';

import { axiosInstance, setAuthToken } from '@/utils/request';

interface GetOneProductByIdProps extends GlobalRequest {
  id: number;
}

interface UpdateProductProps {
  token: string;
  id: number;
  data: Partial<UpdateProduct>;
}

export const getAllProducts = cache(async ({ query }: GlobalRequest) => {
  const res: Response<Products> = await axiosInstance.get(`/products?${query}`).catch((error) => {
    return error;
  });

  return res.data;
});

export const getOneProductById = cache(async ({ id, query }: GetOneProductByIdProps) => {
  const res: Response<Product> = await axiosInstance
    .get(`/products/${id}?${query}`)
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
