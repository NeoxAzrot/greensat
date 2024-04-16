export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const TAGS = {
  PRODUCERS: 'producers',
  PRODUCERS_ID: (id: number) => `producers-${id}`,
  PRODUCERS_SLUG: (slug: string) => `producers-${slug}`,
  PRODUCERS_POPULAR: 'producers-popular',
  PRODUCTS: 'products',
  PRODUCTS_ID: (id: number) => `products-${id}`,
  RESERVATIONS: 'reservations',
  ME: 'me',
  USERS: 'users',
  EVENTS: 'events',
  EVENTS_ID: (id: number) => `events-${id}`,
  EVENTS_SLUG: (slug: string) => `events-${slug}`,
};
