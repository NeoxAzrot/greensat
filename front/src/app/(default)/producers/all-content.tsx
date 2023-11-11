'use client';

import { useState } from 'react';

import PostItem from '@/components/post-item';
import Separator from '@/components/separator';

import { Producers } from '@/types/producer';

const AllContent = ({ producers }: { producers: Producers }) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const handleShowAllClicks = () => {
    setShowAll(true);
  };

  return (
    <section>
      {!showAll ? (
        <div className="text-center">
          <button
            className="btn text-white bg-blue-600 hover:bg-blue-700 group"
            onClick={handleShowAllClicks}
          >
            Voir tous les producteurs{' '}
            <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              -&gt;
            </span>
          </button>
        </div>
      ) : (
        <>
          <Separator />

          <h2 className="h3 font-playfair-display text-center md:text-left mb-8">
            Tous les producteurs
          </h2>

          {/* Articles container */}
          <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
            {producers.map((producer) => (
              <PostItem key={producer.id} {...producer} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default AllContent;
