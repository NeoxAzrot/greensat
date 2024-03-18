import { getServerSession } from 'next-auth';
import { Metadata } from 'next/types';
import qs from 'qs';

import CtaSupport from '@/components/cta-support';
import Hero from '@/components/hero';

import { getAllProducers } from '@/services/producer';
import { getAllReservations } from '@/services/reservation';
import { getUser } from '@/services/user';

import { JwtUserProps, authOptions } from '@/utils/auth';

import Tabs from './tabs';

export const metadata: Metadata = {
  title: 'Ton espace personnel',
  description:
    'Bienvenue dans ton espace personnel ! Gère tes affaires, tes produits gratuits, et explore les avantages éco-responsables. Ta vie, ton compte !',
  alternates: {
    canonical: 'https://greensatable.fr/account',
    languages: {
      fr: 'https://greensatable.fr/account',
    },
  },
  openGraph: {
    title: 'Ton espace personnel',
    url: 'https://greensatable.fr/account',
    description:
      'Bienvenue dans ton espace personnel ! Gère tes affaires, tes produits gratuits, et explore les avantages éco-responsables. Ta vie, ton compte !',
  },
  twitter: {
    title: 'Ton espace personnel',
    description:
      'Bienvenue dans ton espace personnel ! Gère tes affaires, tes produits gratuits, et explore les avantages éco-responsables. Ta vie, ton compte !',
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/account',
    },
  },
};

const Account = async () => {
  const session = await getServerSession(authOptions);

  const userSession = session?.user as unknown as JwtUserProps;

  const queryReservations = qs.stringify(
    {
      populate: {
        product: {
          fields: ['title', 'summary'],
          populate: {
            image: {
              fields: ['url', 'alternativeText'],
            },
            producer: {
              fields: ['slug', 'title'],
            },
          },
        },
      },
      sort: ['reservationDate', 'confirmationDate'],
      filters: {
        user: {
          id: {
            $eq: userSession.id,
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const reservations = await getAllReservations({
    query: queryReservations,
  });

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
            $eq: userSession.id,
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

  const queryUser = qs.stringify(
    {
      fields: ['firstname', 'lastname', 'studentNumber', 'email', 'phoneNumber'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  const user = await getUser({
    token: userSession.jwt,
    query: queryUser,
  });

  return (
    <>
      <Hero
        title="Ton espace personnel"
        description="Gère ton compte, tes produits gratuits, et explore les avantages éco-responsables."
      />

      <Tabs reservations={reservations.data} producers={producers.data} user={user} />

      <CtaSupport />
    </>
  );
};

export default Account;
