import Image from 'next/image';

import SchoolImage from '@/public/images/school.webp';

const HeroEvents = () => {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-36 lg:mb-0 lg:h-[48rem] [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          <div className="max-w-3xl mx-auto text-center pb-16">
            <h1 className="h1 font-playfair-display text-slate-100 mb-4">Les évènements</h1>
            <p className="text-xl text-slate-400">
              Consulte notre liste d&apos;événements et prépare-toi à des expériences uniques et
              enrichissantes.
            </p>
          </div>

          <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="100">
            <div className="max-w-3xl mx-auto" data-aos="fade-up">
              <div className="relative flex justify-center items-center">
                <Image
                  className="object-cover aspect-video"
                  src={SchoolImage}
                  width={768}
                  height={432}
                  loading="lazy"
                  alt="Bâtiment d'une école"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEvents;
