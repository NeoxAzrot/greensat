import { getServerSession } from 'next-auth';
import { Metadata } from 'next/types';
import qs from 'qs';

import { getUser } from '@/queries/user';

import { JwtUserProps, authOptions } from '@/utils/auth';

import Form from './form';

export const metadata: Metadata = {
  title: 'Gère ton compte',
  description:
    'Mets à jour tes informations personnelles, change ton mot de passe ou ajuste tes préférences pour rendre ton expérience sur Greensatable encore plus personnalisée et sécurisée.',
  alternates: {
    canonical: 'https://greensatable.fr/account/settings',
    languages: {
      fr: 'https://greensatable.fr/account/settings',
    },
  },
  openGraph: {
    title: 'Gère ton compte',
    url: 'https://greensatable.fr/account/settings',
    description:
      'Mets à jour tes informations personnelles, change ton mot de passe ou ajuste tes préférences pour rendre ton expérience sur Greensatable encore plus personnalisée et sécurisée.',
  },
  twitter: {
    title: 'Gère ton compte',
    description:
      'Mets à jour tes informations personnelles, change ton mot de passe ou ajuste tes préférences pour rendre ton expérience sur Greensatable encore plus personnalisée et sécurisée.',
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/account/settings',
    },
  },
};

const AccountSettings = async () => {
  const session = await getServerSession(authOptions);

  const userSession = session?.user as unknown as JwtUserProps;

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

  return <Form user={user} />;
};

export default AccountSettings;
