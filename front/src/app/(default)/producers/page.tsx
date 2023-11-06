import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next/types';

import Tags from '@/components/blog-tags';
import Hero from '@/components/hero-blog';
import PostDate from '@/components/post-date';
import PostItem from '@/components/post-item';

import { getAllProducers } from '@/services/producer';

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

  // TODO: Change it with a single where you can chose the featured one
  const featuredProducer = producers.data[0];

  const latestProducers = await getAllProducers({
    sort: 'publishedAt:desc',
    populate: '*',
    pageSize: 3,
  });

  // TODO: Make it works
  // const popularProducers = await getAllProducers({
  //   sort: 'usersLikes',
  //   populate: '*',
  //   pageSize: 3,
  // });

  const marketProducers = await getAllProducers({
    sort: 'publishedAt',
    filters: {
      '[businessType][$eq]': 'market',
    },
    populate: '*',
    pageSize: 3,
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
                  <div className="absolute top-6 right-6">
                    <svg className="w-8 h-8" viewBox="0 0 32 32">
                      <circle className="fill-slate-900" fillOpacity=".48" cx="16" cy="16" r="16" />
                      <path
                        className="fill-yellow-500"
                        d="M21.954 14.29A.5.5 0 0 0 21.5 14h-5.36l.845-3.38a.5.5 0 0 0-.864-.446l-6 7A.5.5 0 0 0 10.5 18h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z"
                      />
                    </svg>
                  </div>
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
                <p className="text-lg text-slate-500 grow">{featuredProducer.attributes.summary}</p>
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
            {/* TODO: Remove comment */}
            {/* <div>
              <h2 className="h3 font-playfair-display text-center md:text-left mb-8">
                Les plus populaires
              </h2> */}

            {/* Articles container */}
            {/* <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {popularProducers?.data.map((producer) => (
                  <PostItem key={producer.id} {...producer} />
                ))}
              </div>
            </div> */}

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
            {/* TODO: Make it works */}
            <div className="text-center">
              <button className="btn text-white bg-blue-600 hover:bg-blue-700 group">
                Voir tous les producteurs{' '}
                <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Producers;
