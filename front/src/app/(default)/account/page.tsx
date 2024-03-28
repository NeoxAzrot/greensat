import { getServerSession } from 'next-auth';
import { Metadata } from 'next/types';
import qs from 'qs';

import CtaSupport from '@/components/cta-support';
import Hero from '@/components/hero';

import { getAllProducers } from '@/queries/producer';
import { getAllReservations } from '@/queries/reservation';
import { getUser } from '@/queries/user';

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

  const defaultQueryReservations = {
    fields: ['confirmed', 'canceled', 'confirmationDate', 'cancelationDate', 'reservationDate'],
    populate: {
      product: {
        fields: ['title', 'summary', 'count'],
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
    filters: {
      user: {
        id: {
          $eq: userSession.id,
        },
      },
    },
  };

  const queryPendingReservations = qs.stringify(
    {
      fields: defaultQueryReservations.fields,
      populate: defaultQueryReservations.populate,
      sort: ['reservationDate'],
      filters: {
        ...defaultQueryReservations.filters,
        confirmed: {
          $eq: false,
        },
        canceled: {
          $eq: false,
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const queryConfirmedReservations = qs.stringify(
    {
      fields: defaultQueryReservations.fields,
      populate: defaultQueryReservations.populate,
      sort: ['confirmationDate'],
      filters: {
        ...defaultQueryReservations.filters,
        confirmed: {
          $eq: true,
        },
        canceled: {
          $eq: false,
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const queryCanceledReservations = qs.stringify(
    {
      fields: defaultQueryReservations.fields,
      populate: defaultQueryReservations.populate,
      sort: ['cancelationDate'],
      filters: {
        ...defaultQueryReservations.filters,
        canceled: {
          $eq: true,
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const pendingReservations = await getAllReservations({
    query: queryPendingReservations,
  });

  const confirmedReservations = await getAllReservations({
    query: queryConfirmedReservations,
  });

  const canceledReservations = await getAllReservations({
    query: queryCanceledReservations,
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

      <Tabs
        pendingReservations={pendingReservations.data}
        confirmedReservations={confirmedReservations.data}
        canceledReservations={canceledReservations.data}
        producers={producers.data}
        user={user}
      />

      <CtaSupport />
    </>
  );
};

export default Account;
