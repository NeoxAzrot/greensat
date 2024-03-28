import { MetadataRoute } from 'next';
import qs from 'qs';

import { getAllProducers } from '@/queries/producer';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const query = qs.stringify(
    {
      fields: ['slug', 'updatedAt'],
      sort: ['title'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  const producers = await getAllProducers({
    query,
  });

  const producersSitemap: MetadataRoute.Sitemap = producers.data.map((producer) => ({
    url: `https://greensatable.fr/producers/${producer.attributes.slug}`,
    lastModified: producer.attributes.updatedAt,
    changeFrequency: 'daily',
    priority: 0.5,
  }));

  return [
    {
      url: 'https://greensatable.fr/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://greensatable.fr/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://greensatable.fr/producers',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://greensatable.fr/support',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://greensatable.fr/account',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://greensatable.fr/login',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://greensatable.fr/register',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.2,
    },
    {
      url: 'https://greensatable.fr/terms-of-use',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://greensatable.fr/privacy-policy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: 'https://greensatable.fr/plan',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.1,
    },
    ...producersSitemap,
  ];
};

export default sitemap;
