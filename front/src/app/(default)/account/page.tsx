import { getServerSession } from 'next-auth';
import { Metadata } from 'next/types';

import CtaSupport from '@/components/cta-support';
import Hero from '@/components/hero';

import { getAllProducts } from '@/services/product';
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

  const products = await getAllProducts({
    sort: ['createdAt'],
    populate: '*',
    filters: {
      '[users][id][$in]': userSession.id.toString(),
      '[active][$eq]': 'true',
    },
  });

  const user = await getUser({
    token: userSession.jwt,
  });

  return (
    <>
      <Hero
        title="Ton espace personnel"
        description="Gère ton compte, tes produits gratuits, et explore les avantages éco-responsables."
      />

      <Tabs products={products.data} user={user} />

      <CtaSupport />
    </>
  );
};

export default Account;
