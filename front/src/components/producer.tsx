import Image from 'next/image';
import Link from 'next/link';

import PostDate from '@/components/date';

import { Producer } from '@/types/producer';

import { truncateWithEllipses } from '@/utils/string';

const Producer = ({ ...props }: Producer) => {
  const summary = truncateWithEllipses({
    content: props.attributes.summary,
  });

  const products = props.attributes.products.data.filter(
    (product) => product.attributes.active && product.attributes.count > 0,
  );

  return (
    <article className="h-full flex flex-col space-y-5" data-aos="fade-up">
      {props.attributes.image && (
        <Link
          className="relative block group overflow-hidden"
          href={`/producers/${props.attributes.slug}`}
          aria-label={props.attributes.title}
        >
          <Image
            className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out"
            src={props.attributes.image.data.attributes.url}
            width={540}
            height={340}
            loading="lazy"
            alt={props.attributes.title}
          />

          {products.length > 0 && (
            <div className="absolute top-4 right-4">
              <svg className="w-8 h-8" viewBox="0 0 512 512">
                <circle className="fill-slate-900" fillOpacity=".48" cx="256" cy="256" r="256" />

                <path
                  className="fill-yellow-500"
                  d="m231.07,185.86l13.05,22.2h-27.49c-8.29,0-15-6.71-15-15s6.71-15,15-15h.82c5.59,0,10.8,2.96,13.61,7.8Zm-47.44,7.2c0,5.4,1.31,10.5,3.6,15h-15.6c-6.64,0-12,5.36-12,12v24c0,6.64,5.36,12,12,12h168c6.64,0,12-5.36,12-12v-24c0-6.64-5.36-12-12-12h-15.6c2.29-4.5,3.6-9.6,3.6-15,0-18.22-14.77-33-33-33h-.83c-11.96,0-23.06,6.34-29.14,16.65l-9.04,15.41-9.04-15.38c-6.07-10.35-17.17-16.69-29.14-16.69h-.82c-18.22,0-33,14.78-33,33Zm126,0c0,8.29-6.71,15-15,15h-27.49l13.05-22.2c2.85-4.84,8.02-7.8,13.61-7.8h.83c8.29,0,15,6.71,15,15Zm-138,75v66c0,9.94,8.06,18,18,18h54v-84h-72Zm96,84h54c9.94,0,18-8.06,18-18v-66h-72v84Z"
                />
              </svg>
            </div>
          )}
        </Link>
      )}

      <div className="grow flex flex-col">
        <header>
          <h3 className="h4 font-playfair-display mb-3">
            <Link
              className="text-slate-800 hover:underline hover:decoration-blue-100"
              href={`/producers/${props.attributes.slug}`}
              aria-label={props.attributes.title}
            >
              {props.attributes.title}
            </Link>
          </h3>
        </header>

        <p className="text-lg text-slate-500 grow">{summary}</p>

        <footer className="flex items-center mt-4">
          <span className="text-slate-500">
            <PostDate dateString={props.attributes.publishedAt.toString()} />
          </span>
        </footer>
      </div>
    </article>
  );
};

export default Producer;
