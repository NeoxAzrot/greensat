import { getServerSession } from 'next-auth';
import { Metadata } from 'next/types';
import qs from 'qs';

import { getAllReservations } from '@/queries/reservation';

import { JwtUserProps, authOptions } from '@/utils/auth';

import Content from './content';

export const metadata: Metadata = {
  title: 'Tes réservations en un clic',
  description:
    "Accède à l'historique complet de tes réservations, confirme celles à venir ou annule-les si nécessaire, tout cela depuis un seul et même endroit pour une expérience simplifiée.",
  alternates: {
    canonical: 'https://greensatable.fr/account/reservations',
    languages: {
      fr: 'https://greensatable.fr/account/reservations',
    },
  },
  openGraph: {
    title: 'Tes réservations en un clic',
    url: 'https://greensatable.fr/account/reservations',
    description:
      "Accède à l'historique complet de tes réservations, confirme celles à venir ou annule-les si nécessaire, tout cela depuis un seul et même endroit pour une expérience simplifiée.",
  },
  twitter: {
    title: 'Tes réservations en un clic',
    description:
      "Accède à l'historique complet de tes réservations, confirme celles à venir ou annule-les si nécessaire, tout cela depuis un seul et même endroit pour une expérience simplifiée.",
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/account/reservations',
    },
  },
};

const AccountReservations = async () => {
  const session = await getServerSession(authOptions);

  const user = session?.user as unknown as JwtUserProps;

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
          $eq: user.id,
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

  return (
    <Content
      pendingReservations={pendingReservations.data}
      confirmedReservations={confirmedReservations.data}
      canceledReservations={canceledReservations.data}
      user={user}
    />
  );
};

export default AccountReservations;
