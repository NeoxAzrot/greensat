import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import Date from '@/components/date';

import { Events as EventsType } from '@/types/event';

import { truncateWithEllipses } from '@/utils/string';

interface EventsProps {
  events: EventsType;
}

const Events = ({ events }: EventsProps) => {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div
            className="hidden md:block absolute top-0 left-1/2 -ml-px -mt-4 w-0.5 h-12 bg-slate-200"
            aria-hidden="true"
          />

          <div className="max-w-xl mx-auto md:max-w-none space-y-20">
            {events.map((event, index) => {
              const summary = truncateWithEllipses({
                content: event.attributes.summary,
                maxLength: 200,
              });

              return (
                <div
                  key={event.id}
                  className={cn(
                    'flex flex-col-reverse md:flex-row md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-4 space-y-reverse md:space-y-0',
                    {
                      'md:flex-row-reverse md:space-x-reverse lg:space-x-reverse xl:space-x-reverse':
                        index % 2 === 0,
                    },
                  )}
                >
                  <div className="md:min-w-[30rem]" data-aos="fade-left">
                    <h2 className="h3 md:text-4xl font-playfair-display mb-4">
                      <Link
                        className="text-slate-800 hover:underline hover:decoration-blue-100"
                        href={`/events/${event.attributes.slug}`}
                        aria-label={event.attributes.title}
                      >
                        {event.attributes.title}
                      </Link>
                    </h2>

                    <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
                      {summary}
                    </p>

                    {event.attributes.distance && (
                      <div className="space-y-3">
                        <svg className="fill-blue-600" width="20" height="16" viewBox="0 0 20 16">
                          <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                        </svg>

                        <blockquote className="font-playfair-display text-slate-500 italic">
                          {event.attributes.distance}
                        </blockquote>
                      </div>
                    )}

                    {event.attributes.address &&
                      event.attributes.latitude &&
                      event.attributes.longitude && (
                        <a
                          href={`https://google.com/maps/?q=${event.attributes.latitude},${event.attributes.longitude}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="inline-flex items-center mt-2">
                            <span className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out">
                              {event.attributes.address}
                            </span>
                          </div>
                        </a>
                      )}

                    <div className="flex items-center mt-4">
                      <div className="font-medium">
                        <span className="text-slate-500">
                          <Date dateString={event.attributes.date.toString()} />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center" data-aos="fade-right">
                    <div className="relative">
                      <div
                        className="absolute inset-0 pointer-events-none border-2 border-slate-200 -translate-x-4 -translate-y-4 -z-10"
                        aria-hidden="true"
                      />

                      <Link
                        className="block group overflow-hidden"
                        href={`/events/${event.attributes.slug}`}
                        data-aos="fade-down"
                        aria-label={event.attributes.title}
                      >
                        <Image
                          className="mx-auto md:max-w-none object-cover group-hover:scale-105 transition duration-700 ease-out"
                          src={event.attributes.image.data.attributes.url}
                          width={540}
                          height={405}
                          loading="lazy"
                          alt={
                            event.attributes.image.data.attributes.alternativeText ||
                            event.attributes.title
                          }
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
