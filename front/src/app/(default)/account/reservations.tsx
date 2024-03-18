import Image from 'next/image';
import Link from 'next/link';

import { Reservations } from '@/types/reservation';

interface AccountReservationsProps {
  reservations: Reservations;
}

// TODO: Ajouter le système de confirmation
// TODO: Ajouter un 'voir toutes les réservations' comme pour les producteurs
const AccountReservations = ({ reservations }: AccountReservationsProps) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">
              Les produits que tu as réservés
            </h2>
          </div>

          {reservations.length > 0 && (
            <div
              className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start mb-12 md:mb-16"
              data-aos-id-reservations
            >
              {reservations.map((reservation) => (
                <article
                  key={reservation.id}
                  className="h-full bg-white p-6 shadow-xl"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-reservations]"
                >
                  <div className="h-full flex flex-col">
                    <header>
                      <div className="flex items-center mb-4">
                        <div className="relative mr-5">
                          <div className="w-12 h-12 shrink-0">
                            <Image
                              className="rounded-full object-cover"
                              src={
                                reservation.attributes.product.data.attributes.image.data.attributes
                                  .url
                              }
                              fill
                              loading="lazy"
                              alt={
                                reservation.attributes.product.data.attributes.image.data.attributes
                                  .alternativeText ||
                                reservation.attributes.product.data.attributes.title
                              }
                            />
                          </div>

                          <div className="absolute top-0 right-0 -mr-2" aria-hidden="true">
                            <svg
                              className="fill-blue-600"
                              width="20"
                              height="16"
                              viewBox="0 0 20 16"
                            >
                              <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                            </svg>
                          </div>
                        </div>

                        <h4 className="h4 font-playfair-display">
                          {reservation.attributes.product.data.attributes.title}
                        </h4>
                      </div>
                    </header>

                    <div className="grow mb-3">
                      <p className="text-slate-500 italic">
                        {reservation.attributes.product.data.attributes.summary}
                      </p>
                    </div>

                    <footer>
                      <div className="text-xs font-medium mt-2">
                        <Link
                          className="text-slate-500 hover:text-blue-600 transition duration-150 ease-in-out"
                          href={`/producers/${reservation.attributes.product.data.attributes.producer.data.attributes.slug}`}
                        >
                          {
                            reservation.attributes.product.data.attributes.producer.data.attributes
                              .title
                          }
                        </Link>
                      </div>
                    </footer>
                  </div>
                </article>
              ))}
            </div>
          )}

          {reservations.length === 0 && (
            <div className="w-full flex items-center justify-center">
              <p className="text-slate-500">Tu n&apos;as réservé aucun produit pour le moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AccountReservations;
