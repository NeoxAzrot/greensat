import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';

import Tags from '@/components/blog-tags';
import Hero from '@/components/hero-blog';
import PostDate from '@/components/post-date';
import PostItem from '@/components/post-item';

import { getAllProducers, getPopularProducers } from '@/services/producer';

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
  const producers = await getAllProducers({
    sort: 'title',
    populate: '*',
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

  const latestProducers = await getAllProducers({
    sort: 'publishedAt:desc',
    populate: '*',
    pageSize: 3,
  });

  const popularProducers = await getPopularProducers();

  const marketProducers = await getAllProducers({
    sort: 'publishedAt',
    filters: {
      '[businessType][$eq]': 'market',
    },
    populate: '*',
    pageSize: 3,
  });

  const featuredSummary = truncateWithEllipses({
    content: featuredProducer.attributes.summary,
    maxLength: 200,
  });

  return (
    <>
      <Hero />
      <Tags producers={producers.data} />

      {/* Featured article */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16">
            <article className="max-w-sm mx-auto space-y-5 md:max-w-none md:flex md:items-center md:space-y-0 md:space-x-8 lg:space-x-16">
              {/* Image */}
              {featuredProducer.attributes.image && (
                <Link
                  className="relative block group overflow-hidden md:w-1/2"
                  href={`/producers/${featuredProducer.attributes.slug}`}
                  data-aos="fade-down"
                >
                  <Image
                    className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out"
                    src={featuredProducer.attributes.image.data.attributes.url}
                    width={540}
                    height={340}
                    priority
                    alt={featuredProducer.attributes.title}
                  />
                  {featuredProducerProducts.length > 0 && (
                    <div className="absolute top-6 right-6">
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
              {/* Content */}
              <div className="md:w-1/2" data-aos="fade-up">
                <header>
                  <h2 className="h4 md:text-4xl lg:text-5xl font-playfair-display mb-3">
                    <Link
                      className="text-slate-800 hover:underline hover:decoration-blue-100"
                      href={`/producers/${featuredProducer.attributes.slug}`}
                    >
                      {featuredProducer.attributes.title}
                    </Link>
                  </h2>
                </header>
                <p className="text-lg text-slate-500 grow">{featuredSummary}</p>
                <footer className="flex items-center mt-4">
                  <span className="text-slate-500">
                    <PostDate dateString={featuredProducer.attributes.publishedAt.toString()} />
                  </span>
                </footer>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* All articles */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-8 md:py-16 space-y-16">
            {/* Latest */}
            <div>
              <h2 className="h3 font-playfair-display text-center md:text-left mb-8">
                Les nouveautés
              </h2>

              {/* Articles container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {latestProducers?.data.map((producer) => (
                  <PostItem key={producer.id} {...producer} />
                ))}
              </div>
            </div>

            {/* Popular */}
            {popularProducers?.data.length > 0 && (
              <div>
                <h2 className="h3 font-playfair-display text-center md:text-left mb-8">
                  Les plus populaires
                </h2>

                {/* Articles container */}
                <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                  {popularProducers?.data.map((producer) => (
                    <PostItem key={producer.id} {...producer} />
                  ))}
                </div>
              </div>
            )}

            {/* Product & News */}
            <div>
              <h2 className="h3 font-playfair-display text-center md:text-left mb-8">
                Les marchés
              </h2>

              {/* Articles container */}
              <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {marketProducers?.data.map((producer) => (
                  <PostItem key={producer.id} {...producer} />
                ))}
              </div>
            </div>

            {/* See All Articles */}
            <AllContent producers={producers.data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Producers;
