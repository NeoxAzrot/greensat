import Producer from '@/components/producer';

import { Producers } from '@/types/producer';

interface AccountProducersProps {
  producers: Producers;
}

const AccountProducers = ({ producers }: AccountProducersProps) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">
              Les producteurs que tu as aimés
            </h2>
          </div>

          {producers?.length > 0 && (
            <div
              className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start mb-12 md:mb-16"
              data-aos-id-producers
            >
              {producers?.map((producer) => <Producer key={producer.id} {...producer} />)}
            </div>
          )}

          {producers.length === 0 && (
            <div className="w-full flex items-center justify-center">
              <p className="text-slate-500">Tu n&apos;as pas encore aimé de producteurs.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AccountProducers;
