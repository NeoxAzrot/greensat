import Image from 'next/image';
import Link from 'next/link';

import Date from '@/components/date';

import { Events as EventsType } from '@/types/event';

import { truncateWithEllipses } from '@/utils/string';

interface PastEventsProps {
  events: EventsType;
}

const PastEvents = ({ events }: PastEventsProps) => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">Les événements passés</h2>
          </div>

          <div
            className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start mb-12 md:mb-16"
            data-aos-id-testimonials
          >
            {events.map((event) => {
              const summary = truncateWithEllipses({
                content: event.attributes.summary,
              });

              return (
                <article
                  key={event.id}
                  className="h-full flex flex-col bg-white p-6 shadow-xl"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-testimonials]"
                >
                  <header>
                    <div className="flex items-center mb-4">
                      <div className="relative mr-5">
                        <div className="w-12 h-12 shrink-0">
                          <Image
                            className="rounded-full object-cover"
                            src={event.attributes.image.data.attributes.url}
                            fill
                            loading="lazy"
                            alt={
                              event.attributes.image.data.attributes.alternativeText ||
                              event.attributes.title
                            }
                          />
                        </div>

                        <div className="absolute top-0 right-0 -mr-2" aria-hidden="true">
                          <svg className="fill-blue-600" width="20" height="16" viewBox="0 0 20 16">
                            <path d="M2.76 16c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.613-2.272-1.748-2.272s-2.27.726-3.283 1.64C3.16 6.439 5.613 3.346 9.571.885L9.233 0C3.466 2.903 0 7.732 0 12.213 0 14.517.828 16 2.76 16Zm10.43 0c2.577 0 5.154-3.219 5.154-5.996 0-1.357-.614-2.272-1.749-2.272-1.135 0-2.27.726-3.282 1.64.276-2.934 2.73-6.027 6.687-8.488L19.663 0c-5.767 2.903-9.234 7.732-9.234 12.213 0 2.304.829 3.787 2.761 3.787Z" />
                          </svg>
                        </div>
                      </div>

                      <h4 className="h4 font-playfair-display">{event.attributes.title}</h4>
                    </div>
                  </header>

                  <div className="grow mb-3">
                    <p className="text-slate-500 italic">{summary}</p>
                  </div>

                  <footer className="text-sm font-medium">
                    <span className="text-slate-500">
                      <Date dateString={event.attributes.date.toString()} />
                    </span>
                  </footer>

                  <div className="text-right">
                    <Link
                      className="inline-flex font-semibold text-blue-600 hover:underline mt-5 group"
                      href={`/events/${event.attributes.slug}`}
                      aria-label={event.attributes.title}
                    >
                      Voir l&apos;événement
                      <span className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                        -&gt;
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
