import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import CtaRecommendation from '@/components/cta-recommendation';
import Date from '@/components/date';
import Tooltip from '@/components/layout/tooltip';
import MapAndText from '@/components/map-and-text';
import Mdx from '@/components/mdx';
import ProducerItem from '@/components/producer';
import Products from '@/components/products';
import Separator from '@/components/separator';

import { getAllProducers, getOneProducerBySlug } from '@/services/producer';
import { getAllProducts } from '@/services/product';

import { getPictosImages } from '@/utils/producer';

import Likes from './likes';
import {
  AnimalSurveyRender,
  StoreSurveyRender,
  TransformSurveyRender,
  VegetalSurveyRender,
} from './survey';

interface MetadataProps {
  params: {
    slug: string;
  };
}

interface ProducerProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const producers = await getAllProducers({});

  return producers.data.map((producer) => ({
    slug: producer.attributes.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: MetadataProps): Promise<Metadata | undefined> => {
  const producer = await getOneProducerBySlug({
    slug: params.slug,
  });

  if (!producer) return;

  const { title, summary: description, slug } = producer.data.attributes;

  return {
    title,
    description,
    alternates: {
      canonical: `https://greensatable.fr/producers/${slug}`,
      languages: {
        fr: `https://greensatable.fr/producers/${slug}`,
      },
    },
    openGraph: {
      title,
      url: `https://greensatable.fr/producers/${slug}`,
      description,
    },
    twitter: {
      title,
      description,
    },
    appLinks: {
      web: {
        url: `https://greensatable.fr/producers/${slug}`,
      },
    },
  };
};

const Producer = async ({ params }: ProducerProps) => {
  const producers = await getAllProducers({
    sort: 'title',
    populate: '*',
    filters: {
      '[slug][$ne]': params.slug,
    },
  });

  const products = await getAllProducts({
    sort: ['count:desc', 'createdAt'],
    populate: '*',
    filters: {
      '[producer][slug][$eq]': params.slug,
      '[active][$eq]': 'true',
    },
  });

  const relatedProducers = producers.data.sort(() => Math.random() - Math.random()).slice(0, 3);

  const producer = await getOneProducerBySlug({
    slug: params.slug,
  });

  if (!producer) notFound();

  const data = producer.data.attributes;
  const survey = data.survey[0];

  const pictos = getPictosImages({
    pictos: data.pictos || [],
  });

  return (
    <>
      <article>
        <header className="relative">
          <div
            className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-36 lg:mb-0 lg:h-[48rem] [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
            aria-hidden="true"
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 md:pt-40 pb-8">
              <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                  <div className="text-center md:text-left">
                    <Link
                      className="inline-flex font-semibold text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out group mb-2"
                      href="/producers"
                      data-aos="fade-down"
                      aria-label="Revenir à la carte"
                    >
                      <span className="tracking-normal text-blue-600 group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1">
                        &lt;-
                      </span>{' '}
                      Revenir à la carte
                    </Link>

                    <h1 className="h2 font-playfair-display text-slate-100 mb-6">{data.title}</h1>
                  </div>

                  <div
                    className="md:flex md:items-center md:justify-between mt-3"
                    data-aos="fade-up"
                  >
                    <div className="flex items-center justify-center">
                      <span className="text-slate-400">
                        <Date dateString={data.publishedAt.toString()} />
                      </span>
                    </div>

                    <Likes producer={producer.data} />
                  </div>
                </div>

                {data.image && (
                  <figure>
                    <Image
                      className="w-full"
                      src={data.image.data.attributes.url}
                      width={768}
                      height={432}
                      loading="lazy"
                      alt={data.title}
                    />
                  </figure>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-14">
          <div className="max-w-3xl mx-auto">
            {data.summary && (
              <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-6">
                {data.summary}
              </p>
            )}

            {pictos.length > 0 && (
              <div className="flex items-center mb-8 flex-wrap">
                {pictos.map((picto, index) => (
                  <div className="mr-3 shrink-0" key={`picto-${index}`}>
                    <Tooltip content={picto.caption}>
                      <Image
                        className="rounded-full"
                        src={picto.image.src}
                        alt={picto.caption}
                        width="72"
                        height="72"
                        loading="lazy"
                      />
                    </Tooltip>
                  </div>
                ))}
              </div>
            )}

            {data.survey[0]?.mainProducerValues && (
              <div className="prose text-lg text-slate-500 max-w-none prose-lg prose-p:leading-normal prose-headings:font-playfair-display prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-slate-900 prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-slate-900 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit before:prose-p:content-[''] after:prose-p:content-[''] prose-hr:my-8">
                <h3>
                  En trois mots : quelles sont les valeurs/idées principales portées par le
                  producteur ?
                </h3>

                <p>{data.survey[0].mainProducerValues}</p>
              </div>
            )}
          </div>
        </div>

        <MapAndText producer={producer.data} />

        {data.discount && (
          <>
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-14">
              <div className="max-w-3xl mx-auto border-l-2 border-slate-800 pl-4 mb-6">
                <Mdx code={data.discount} />
              </div>
            </div>

            <Separator />
          </>
        )}

        {products.data.length > 0 && <Products products={products.data} />}

        {survey && (
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="prose text-lg text-slate-500 max-w-none prose-lg prose-p:leading-normal prose-headings:font-playfair-display prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-slate-900 prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-slate-900 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit before:prose-p:content-[''] after:prose-p:content-[''] prose-hr:my-8">
                {survey?.__component === 'surveys.animal' && AnimalSurveyRender({ survey })}
                {survey?.__component === 'surveys.store' && StoreSurveyRender({ survey })}
                {survey?.__component === 'surveys.transform' && TransformSurveyRender({ survey })}
                {survey?.__component === 'surveys.vegetable' && VegetalSurveyRender({ survey })}
              </div>
            </div>
          </div>
        )}
      </article>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="my-12 md:my-20 border-t border-slate-200" />

        <h2 className="h3 font-playfair-display text-center md:text-left mb-8">
          Découvre d&apos;autres producteurs
        </h2>

        <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
          {relatedProducers.map((relatedProcuder) => (
            <ProducerItem key={relatedProcuder.id} {...relatedProcuder} />
          ))}
        </div>
      </div>

      <Separator />

      <CtaRecommendation />
    </>
  );
};

export default Producer;
