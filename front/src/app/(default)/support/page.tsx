import { Metadata } from 'next/types';

import CtaSupport from '@/components/cta-support';
import Faq from '@/components/faq';
import Hero from '@/components/hero';

export const metadata: Metadata = {
  title: "Besoin d'aide ? On est là pour toi",
  description:
    "T'as des questions ? Consulte notre FAQ pour des réponses rapides ou contacte notre équipe. On est là pour t'aider, t'es pas tout seul dans cette aventure !",
  alternates: {
    canonical: 'https://greensatable.fr/support',
    languages: {
      fr: 'https://greensatable.fr/support',
    },
  },
  openGraph: {
    title: "Besoin d'aide ? On est là pour toi",
    url: 'https://greensatable.fr/support',
    description:
      "T'as des questions ? Consulte notre FAQ pour des réponses rapides ou contacte notre équipe. On est là pour t'aider, t'es pas tout seul dans cette aventure !",
  },
  twitter: {
    title: "Besoin d'aide ? On est là pour toi",
    description:
      "T'as des questions ? Consulte notre FAQ pour des réponses rapides ou contacte notre équipe. On est là pour t'aider, t'es pas tout seul dans cette aventure !",
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/support',
    },
  },
};

const Support = () => {
  return (
    <>
      <Hero title="Support" />
      <Faq />
      <CtaSupport />
    </>
  );
};

export default Support;
