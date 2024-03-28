import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';
import qs from 'qs';

import Date from '@/components/date';
import Hero from '@/components/hero';
import Producer from '@/components/producer';
import Tags from '@/components/tags';

import { getAllProducers, getPopularProducers } from '@/queries/producer';

import { getRandomInt } from '@/utils/random';
import { truncateWithEllipses } from '@/utils/string';

import AllContent from './all-content';

export const metadata: Metadata = {
  title: 'Découvre les producteurs locaux',
  description:
    "Découvre les producteurs locaux près de l'ENSAT sur notre carte interactive. Fais tes courses avec style et soutiens l'éco-responsabilité !",
  alternates: {
    canonical: 'https://greensatable.fr/producers',
    languages: {
      fr: 'https://greensatable.fr/producers',
    },
  },
  openGraph: {
    title: 'Découvre les producteurs locaux',
    url: 'https://greensatable.fr/producers',
    description:
      "Découvre les producteurs locaux près de l'ENSAT sur notre carte interactive. Fais tes courses avec style et soutiens l'éco-responsabilité !",
  },
  twitter: {
    title: 'Découvre les producteurs locaux',
    description:
      "Découvre les producteurs locaux près de l'ENSAT sur notre carte interactive. Fais tes courses avec style et soutiens l'éco-responsabilité !",
  },
  appLinks: {
    web: {
      url: 'https://greensatable.fr/producers',
    },
  },
};

const Producers = async () => {
  const query = qs.stringify(
    {
      fields: [
        'slug',
        'title',
        'summary',
        'publishedAt',
        'address',
        'latitude',
        'longitude',
        'businessType',
      ],
      populate: {
        products: {
          fields: ['active', 'count'],
        },
        image: {
          fields: ['url'],
        },
        survey: {
          fields: ['__component'],
        },
      },
      sort: ['title'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  const producers = await getAllProducers({
    query,
  });

  const featuredProducer =
    producers.data[
      getRandomInt({
        min: 0,
        max: producers.data.length - 1,
      })
    ];

  const featuredProducerProducts = featuredProducer.attributes.products.data.filter(
    (product) => product.attributes.active && product.attributes.count > 0,
  );

  const queryLatest = qs.stringify(
    {
      fields: ['slug', 'title', 'summary', 'publishedAt'],
      populate: {
        products: {
          fields: ['active', 'count'],
        },
        image: {
          fields: ['url'],
        },
      },
      sort: ['publishedAt:desc'],
      pagination: {
        pageSize: 3,
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const latestProducers = await getAllProducers({
    query: queryLatest,
  });

  const popularProducers = await getPopularProducers();

  const queryMarket = qs.stringify(
    {
      fields: ['slug', 'title', 'summary', 'publishedAt'],
      populate: {
        products: {
          fields: ['active', 'count'],
        },
        image: {
          fields: ['url'],
        },
      },
      sort: ['publishedAt'],
      filters: {
        businessType: {
          $eq: 'market',
        },
      },
      pagination: {
        pageSize: 3,
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

  const marketProducers = await getAllProducers({
    query: queryMarket,
  });

  const featuredSummary = truncateWithEllipses({
    content: featuredProducer.attributes.summary,
    maxLength: 200,
  });

  return (
    <>
      <Hero
        title="Les producteurs"
        description="Tu souhaites faire tes courses localement et facilement ? Tu es au bon endroit !"
      />
      <Tags producers={producers.data} />

      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16">
            <article className="max-w-sm mx-auto space-y-5 md:max-w-none md:flex md:items-center md:space-y-0 md:space-x-8 lg:space-x-16">
              {featuredProducer.attributes.image && (
                <Link
                  className="relative block group overflow-hidden md:w-1/2"
                  href={`/producers/${featuredProducer.attributes.slug}`}
                  data-aos="fade-down"
                  aria-label={featuredProducer.attributes.title}
                >
                  <Image
                    className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out"
                    src={featuredProducer.attributes.image.data.attributes.url}
                    width={540}
                    height={340}
                    loading="lazy"
                    alt={featuredProducer.attributes.title}
                  />

                  {featuredProducerProducts.length > 0 && (
                    <div className="absolute top-6 right-6" aria-hidden="true">
                      <svg className="w-8 h-8" viewBox="0 0 512 512">
                        <circle
                          className="fill-slate-900"
                          fillOpacity=".48"
                          cx="256"
                          cy="256"
                          r="256"
                        />

                        <path
                          className="fill-yellow-500"
                          d="m231.07,185.86l13.05,22.2h-27.49c-8.29,0-15-6.71-15-15s6.71-15,15-15h.82c5.59,0,10.8,2.96,13.61,7.8Zm-47.44,7.2c0,5.4,1.31,10.5,3.6,15h-15.6c-6.64,0-12,5.36-12,12v24c0,6.64,5.36,12,12,12h168c6.64,0,12-5.36,12-12v-24c0-6.64-5.36-12-12-12h-15.6c2.29-4.5,3.6-9.6,3.6-15,0-18.22-14.77-33-33-33h-.83c-11.96,0-23.06,6.34-29.14,16.65l-9.04,15.41-9.04-15.38c-6.07-10.35-17.17-16.69-29.14-16.69h-.82c-18.22,0-33,14.78-33,33Zm126,0c0,8.29-6.71,15-15,15h-27.49l13.05-22.2c2.85-4.84,8.02-7.8,13.61-7.8h.83c8.29,0,15,6.71,15,15Zm-138,75v66c0,9.94,8.06,18,18,18h54v-84h-72Zm96,84h54c9.94,0,18-8.06,18-18v-66h-72v84Z"
                        />
                      </svg>
                    </div>
                  )}
                </Link>
              )}

              <div className="md:w-1/2" data-aos="fade-up">
                <header>
                  <h2 className="h4 md:text-4xl lg:text-5xl font-playfair-display mb-3">
                    <Link
                      className="text-slate-800 hover:underline hover:decoration-blue-100"
                      href={`/producers/${featuredProducer.attributes.slug}`}
                      aria-label={featuredProducer.attributes.title}
                    >
                      {featuredProducer.attributes.title}
                    </Link>
                  </h2>
                </header>

                <p className="text-lg text-slate-500 grow">{featuredSummary}</p>

                <footer className="flex items-center mt-4">
                  <span className="text-slate-500">
                    <Date dateString={featuredProducer.attributes.publishedAt.toString()} />
                  </span>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16 space-y-16">
            {latestProducers?.data.length > 0 && (
              <div>
                <h2 className="h3 font-playfair-display text-center md:text-left mb-8">
                  Les nouveautés
                </h2>

                <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                  {latestProducers?.data.map((producer) => (
                    <Producer key={producer.id} {...producer} />
                  ))}
                </div>
              </div>
            )}

            {popularProducers?.data.length > 0 && (
              <div>
                <h2 className="h3 font-playfair-display text-center md:text-left mb-8">
                  Les plus populaires
                </h2>

                <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                  {popularProducers?.data.map((producer) => (
                    <Producer key={producer.id} {...producer} />
                  ))}
                </div>
              </div>
            )}

            {marketProducers?.data.length > 0 && (
              <div>
                <h2 className="h3 font-playfair-display text-center md:text-left mb-8">
                  Les marchés
                </h2>

                <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                  {marketProducers?.data.map((producer) => (
                    <Producer key={producer.id} {...producer} />
                  ))}
                </div>
              </div>
            )}

            <AllContent producers={producers.data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Producers;
