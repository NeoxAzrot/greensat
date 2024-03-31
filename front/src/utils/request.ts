import { API_URL } from '@/utils/constants';

interface FetchDataProps {
  url: string;
  token?: string;
  query?: string;
  tags?: string[];
  method?: string;
  data?: object;
}

export const fetchData = async <T>({
  url,
  token,
  query,
  tags,
  method = 'GET',
  data: bodyData,
}: FetchDataProps): Promise<T> => {
  try {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }

    const options: RequestInit = {
      headers,
      method,
      ...(tags ? { next: { tags } } : {}),
      ...(bodyData ? { body: JSON.stringify(bodyData) } : {}),
    };

    const queryString = query ? `?${query}` : '';
    const response = await fetch(`${API_URL}/api${url}${queryString}`, options);

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
