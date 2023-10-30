import Link from 'next/link';

import Separator from '@/components/separator';

import { getAllProducers } from '@/services/producer';

const PlanContent = async () => {
  const producers = await getAllProducers({
    pageSize: 100,
    sort: 'title',
  });

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="pt-8 mb-8">
          <div className="prose text-lg text-slate-500 max-w-none prose-lg prose-p:leading-normal prose-headings:font-playfair-display prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-slate-900 prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-slate-900 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit before:prose-p:content-[''] after:prose-p:content-[''] prose-hr:my-8">
            <h2>Les pages</h2>
            <ul>
              <li>
                <Link href="/">Accueil</Link>
              </li>

              <li>
                <Link href="/about">À propos</Link>
              </li>

              <li>
                <Link href="/producers">Les producteurs</Link>
              </li>

              <li>
                <Link href="/support">Support</Link>
              </li>

              <li>
                <Link href="/account">Mon compte</Link>
              </li>

              <li>
                <Link href="/login">Se connecter</Link>
              </li>

              <li>
                <Link href="/register">S&apos;inscrire</Link>
              </li>

              <li>
                <Link href="/terms-of-use">Mentions légales</Link>
              </li>

              <li>
                <Link href="/privacy-policy">Politique de confidentialité</Link>
              </li>

              <li>
                <Link href="/plan">Plan du site</Link>
              </li>
            </ul>

            <Separator />

            <h2>Les producteurs</h2>
            <ul>
              {producers.data.map((producer) => (
                <li key={producer.id}>
                  <Link href={`/producers/${producer.attributes.slug}`}>
                    {producer.attributes.title}
                  </Link>
                </li>
              ))}
            </ul>

            <Separator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanContent;
