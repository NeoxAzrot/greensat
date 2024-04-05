import { format, parseISO } from 'date-fns';
import fr from 'date-fns/locale/fr';
import Image from 'next/image';
import Link from 'next/link';

import { Reservations } from '@/types/reservation';

import { JwtUserProps } from '@/utils/auth';

import AccountReservationsButton from './button';

interface AccountReservationsListProps {
  reservations: Reservations;
  title: string;
  status: 'confirmed' | 'canceled' | 'pending';
  user: JwtUserProps;
}

const AccountReservationsList = ({
  reservations,
  title,
  status,
  user,
}: AccountReservationsListProps) => {
  return (
    <>
      {reservations.length > 0 && (
        <div>
          <h2 className="h3 font-playfair-display text-center md:text-left mb-8">{title}</h2>

          <div
            className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start mb-12 md:mb-16"
            data-aos-id-reservations
          >
            {reservations.map((reservation) => {
              const reservationDate = reservation.attributes.reservationDate.toString();
              const confirmationDate = reservation.attributes.confirmationDate?.toString();
              const cancelationDate = reservation.attributes.cancelationDate?.toString();

              return (
                <article
                  key={reservation.id}
                  className="h-full bg-white p-6 shadow-xl relative"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-reservations]"
                >
                  <div
                    className={`h-full flex flex-col 
                  ${status === 'canceled' && 'opacity-30'}`}
                  >
                    <header>
                      {status === 'confirmed' && (
                        <div className="absolute top-0 right-0 mr-6 -mt-4">
                          <div className="inline-flex text-sm font-semibold py-1 px-3 text-emerald-700 bg-emerald-200 rounded-full">
                            Confirmé
                          </div>
                        </div>
                      )}

                      {status === 'canceled' && (
                        <div className="absolute top-0 right-0 mr-6 -mt-4">
                          <div className="inline-flex text-sm font-semibold py-1 px-3 text-rose-700 bg-rose-200 rounded-full">
                            Annulé
                          </div>
                        </div>
                      )}

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
                      {status === 'pending' && (
                        <AccountReservationsButton reservation={reservation} user={user} />
                      )}

                      <div className="text-xs font-medium mt-2">
                        <Link
                          className="text-slate-800 hover:text-blue-600 transition duration-150 ease-in-out"
                          href={`/producers/${reservation.attributes.product.data.attributes.producer.data.attributes.slug}`}
                        >
                          {
                            reservation.attributes.product.data.attributes.producer.data.attributes
                              .title
                          }
                        </Link>

                        <span className="text-slate-300"> · </span>

                        {status === 'pending' && (
                          <span className="text-slate-500">
                            Réservé le{' '}
                            <time dateTime={reservationDate}>
                              {format(parseISO(reservationDate), 'd MMMM, yyyy', {
                                locale: fr,
                              })}
                            </time>
                          </span>
                        )}

                        {status === 'confirmed' && reservation.attributes.confirmationDate && (
                          <span className="text-slate-500">
                            Confirmé le{' '}
                            <time dateTime={confirmationDate}>
                              {format(parseISO(confirmationDate || ''), 'd MMMM, yyyy', {
                                locale: fr,
                              })}
                            </time>
                          </span>
                        )}

                        {status === 'canceled' && reservation.attributes.cancelationDate && (
                          <span className="text-slate-500">
                            Annulé le{' '}
                            <time dateTime={cancelationDate}>
                              {format(parseISO(cancelationDate || ''), 'd MMMM, yyyy', {
                                locale: fr,
                              })}
                            </time>
                          </span>
                        )}
                      </div>
                    </footer>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default AccountReservationsList;
