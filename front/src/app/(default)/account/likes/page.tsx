import { getServerSession } from 'next-auth';
import { Metadata } from 'next/types';
import qs from 'qs';

import Producer from '@/components/producer';

import { getAllProducers } from '@/queries/producer';

import { JwtUserProps, authOptions } from '@/utils/auth';

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

const AccountProducers = async () => {
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

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">
              Les producteurs que tu as aimés
            </h2>
          </div>

          {producers?.data.length > 0 && (
            <div
              className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start mb-12 md:mb-16"
              data-aos-id-producers
            >
              {producers?.data.map((producer) => <Producer key={producer.id} {...producer} />)}
            </div>
          )}

          {producers.data.length === 0 && (
            <div className="w-full flex items-center justify-center">
              <p className="text-slate-500">Tu n&apos;as pas encore aimé de producteurs.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AccountProducers;
