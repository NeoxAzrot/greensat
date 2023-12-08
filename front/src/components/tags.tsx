'use client';

import { useMemo, useState } from 'react';

import Map from '@/components/map';

import { Producers } from '@/types/producer';
import { Survey } from '@/types/surveys';

interface FilterProps {
  type?: Survey['__component'];
}

interface TagsProps {
  producers: Producers;
}

const Tags = ({ producers }: TagsProps) => {
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

        <div
          className="flex justify-center items-center mx-auto w-full h-[405px] md:h-[576px] mt-8 mb-4"
          data-aos="fade-left"
        >
          <div className="relative w-full h-full">
            <div
              className="absolute inset-0 pointer-events-none border-2 border-slate-200 translate-x-4 translate-y-4 -z-10"
              aria-hidden="true"
            />

            <Map producers={filteredProducers} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tags;
