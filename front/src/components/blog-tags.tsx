'use client';

import { useMemo, useState } from 'react';

import Map from '@/components/map';

import { Producers } from '@/types/producer';
import { Survey } from '@/types/surveys';

interface FilterProps {
  type?: Survey['__component'];
}

const BlogTags = ({ producers }: { producers: Producers }) => {
  const [filters, setFilters] = useState<FilterProps>({
    type: undefined,
  });

  const getButtonClasses = (type: Survey['__component']) => {
    if (filters.type === type) {
      return 'font-medium whitespace-nowrap text-blue-600';
    }

    return 'font-medium whitespace-nowrap text-slate-500 hover:text-slate-600 transition duration-150 ease-in-out';
  };

  const handleClick = (type: Survey['__component']) => {
    if (type === filters.type) {
      setFilters({
        type: undefined,
      });

      return;
    }

    setFilters({
      type,
    });
  };

  const filteredProducers = useMemo(() => {
    if (!filters.type) {
      return producers;
    }

    return producers.filter((producer) =>
      producer.attributes.survey.some((survey) => survey.__component === filters.type),
    );
  }, [filters.type, producers]);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="w-full flex items-center justify-between space-x-10 overflow-x-scroll no-scrollbar py-5 border-b border-slate-100">
          <div className="w-full flex items-center justify-between space-x-10">
            <ul className="flex md:flex-wrap -mx-5 -my-2">
              <li className="mx-5 my-2">
                <button
                  className={getButtonClasses('surveys.animal')}
                  onClick={() => handleClick('surveys.animal')}
                >
                  Produits animaux
                </button>
              </li>
              <li className="mx-5 my-2">
                <button
                  className={getButtonClasses('surveys.vegetable')}
                  onClick={() => handleClick('surveys.vegetable')}
                >
                  Produits végétaux
                </button>
              </li>
              <li className="mx-5 my-2">
                <button
                  className={getButtonClasses('surveys.transform')}
                  onClick={() => handleClick('surveys.transform')}
                >
                  Produits transformés
                </button>
              </li>
              <li className="mx-5 my-2">
                <button
                  className={getButtonClasses('surveys.store')}
                  onClick={() => handleClick('surveys.store')}
                >
                  Épicerie
                </button>
              </li>
            </ul>
          </div>
        </div>

        <Map producers={filteredProducers} height="700px" />
      </div>
    </section>
  );
};

export default BlogTags;
