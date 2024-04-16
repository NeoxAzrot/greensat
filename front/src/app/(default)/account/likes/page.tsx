import { getServerSession } from 'next-auth';
import { Metadata } from 'next/types';
import qs from 'qs';

import { getAllProducers } from '@/queries/producer';

import { JwtUserProps, authOptions } from '@/utils/auth';

import Content from './content';

export const metadata: Metadata = {
  title: 'Tes producteurs préférés',
  description:
    'Parcours la liste des producteurs que tu as spécialement marqués comme favoris. Redécouvre ceux qui ont captivé ton attention et soutiens-les en un clic.',
  alternates: {
    canonical: 'https://greensatable.fr/account/likes',
    languages: {
      fr: 'https://greensatable.fr/account/likes',
    },
  },
  openGraph: {
    title: 'Tes producteurs préférés',
    url: 'https://greensatable.fr/account/likes',
    description:
      'Parcours la liste des producteurs que tu as spécialement marqués comme favoris. Redécouvre ceux qui ont captivé ton attention et soutiens-les en un clic.',
  },
  twitter: {
    title: 'Tes producteurs préférés',
    description:
      'Parcours la liste des producteurs que tu as spécialement marqués comme favoris. Redécouvre ceux qui ont captivé ton attention et soutiens-les en un clic.',
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/account/likes',
    },
  },
};

const AccountLikes = async () => {
  const session = await getServerSession(authOptions);

  const user = session?.user as unknown as JwtUserProps;

  const queryProducers = qs.stringify(
    {
      fields: ['slug', 'title', 'summary', 'publishedAt'],
      populate: {
        products: {
          fields: ['active', 'count'],
        },
        image: {
          fields: ['url'],
        },
      },
      sort: ['title'],
      filters: {
        usersLikes: {
          id: {
            $eq: user.id,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const producers = await getAllProducers({
    query: queryProducers,
  });

  return <Content producers={producers.data} />;
};

export default AccountLikes;
