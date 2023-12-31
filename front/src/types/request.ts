import { AxiosResponse } from 'axios';

export interface GlobalRequest {
  sort?: string | string[];
  populate?: string | boolean;
  filters?: {
    [key: string]: string;
  };
}

export interface PaginationRequest extends GlobalRequest {
  page?: number;
  pageSize?: number;
}

export interface PaginationResponse {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Response<T> extends AxiosResponse {
  data: {
    data: T;
    meta: {
      pagination?: PaginationResponse;
    };
  };
}

export interface ResponseUser<T> extends AxiosResponse {
  data: T;
}

export interface ResponseRegister<T> extends AxiosResponse {
  data: {
    user: T;
  };
}

export interface ResponseLogin<T> extends AxiosResponse {
  data: {
    jwt: string;
    user: T;
  };
}

export interface ResponseChangePassword<T> extends AxiosResponse {
  data: {
    jwt: string;
    user: T;
  };
}
