import Link from 'next/link';

import Separator from '@/components/separator';

import { Events } from '@/types/event';
import { Producers } from '@/types/producer';

interface PlanContentProps {
  producers: Producers;
  events: Events;
}

const PlanContent = ({ producers, events }: PlanContentProps) => {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="pt-8 mb-8">
          <div className="prose text-lg text-slate-500 max-w-none prose-lg prose-p:leading-normal prose-headings:font-playfair-display prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-slate-900 prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-slate-900 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit before:prose-p:content-[''] after:prose-p:content-[''] prose-hr:my-8">
            <h2>Les pages</h2>

            <ul>
              <li>
                <Link href="/" aria-label="Accueil">
                  Accueil
                </Link>
              </li>

              <li>
                <Link href="/about" aria-label="À propos">
                  À propos
                </Link>
              </li>

              <li>
                <Link href="/producers" aria-label="Les producteurs">
                  Les producteurs
                </Link>
              </li>

              <li>
                <Link href="/events" aria-label="Les événements">
                  Les événements
                </Link>
              </li>

              <li>
                <Link href="/support" aria-label="Support">
                  Support
                </Link>
              </li>

              <li>
                <Link href="/account/settings" aria-label="Mon compte">
                  Mon compte
                </Link>
              </li>

              <li>
                <Link href="/account/reservations" aria-label="Mes réservations">
                  Mes réservations
                </Link>
              </li>

              <li>
                <Link href="/account/likes" aria-label="Mes producteurs préférés">
                  Mes producteurs préférés
                </Link>
              </li>

              <li>
                <Link href="/login" aria-label="Se connecter">
                  Se connecter
                </Link>
              </li>

              <li>
                <Link href="/register" aria-label="Créer un compte">
                  S&apos;inscrire
                </Link>
              </li>

              <li>
                <Link href="/terms-of-use" aria-label="Mentions légales">
                  Mentions légales
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" aria-label="Politique de confidentialité">
                  Politique de confidentialité
                </Link>
              </li>

              <li>
                <Link href="/plan" aria-label="Plan du site">
                  Plan du site
                </Link>
              </li>
            </ul>

            <Separator />

            <h2>Les producteurs</h2>

            <ul>
              {producers.map((producer) => (
                <li key={producer.id}>
                  <Link
                    href={`/producers/${producer.attributes.slug}`}
                    aria-label={producer.attributes.title}
                  >
                    {producer.attributes.title}
                  </Link>
                </li>
              ))}
            </ul>

            <Separator />

            <h2>Les événements</h2>

            <ul>
              {events.map((event) => (
                <li key={event.id}>
                  <Link
                    href={`/events/${event.attributes.slug}`}
                    aria-label={event.attributes.title}
                  >
                    {event.attributes.title}
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
