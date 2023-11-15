import Link from 'next/link';

import PostDate from '@/components/post-date';

import { Producer } from '@/types/producer';

import { truncateWithEllipses } from '@/utils/string';

const PostItem = ({ ...props }: Producer) => {
  const summary = truncateWithEllipses({
    content: props.attributes.summary,
  });

  return (
    <article className="h-full flex flex-col space-y-5" data-aos="fade-up">
      {props.attributes.image && (
        <Link className="block group overflow-hidden" href={`/producers/${props.attributes.slug}`}>
          <img
            className="w-full aspect-[16/9] md:aspect-[27/17] object-cover group-hover:scale-105 transition duration-700 ease-out"
            src={props.attributes.image.data.attributes.url}
            width={540}
            height={340}
            alt={props.attributes.title}
          />
        </Link>
      )}
      <div className="grow flex flex-col">
        <header>
          <h3 className="h4 font-playfair-display mb-3">
            <Link
              className="text-slate-800 hover:underline hover:decoration-blue-100"
              href={`/producers/${props.attributes.slug}`}
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

export default PostItem;
