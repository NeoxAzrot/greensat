export interface GlobalRequest {
  query?: string;
}

export interface PaginationResponse {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Response<T> {
  data: T;
  meta: {
    pagination?: PaginationResponse;
  };
}

export interface ResponseUser<T> {
  user: T;
}

export interface ResponseUserJwt<T> extends ResponseUser<T> {
  jwt: string;
}
