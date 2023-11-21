import Image from 'next/image';

import SchoolImage from '@/public/images/school.webp';
import TeamImage from '@/public/images/team.webp';

const HeroImage = () => {
  return (
    <section className="relative">
      <div
        className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-48 lg:mb-0 lg:h-[30rem]"
        aria-hidden="true"
      >
        <div className="w-full h-full" data-aos="fade">
          <Image
            className="opacity-10 w-full h-full object-cover"
            src={SchoolImage}
            width={1440}
            height={497}
            loading="lazy"
            alt="Bâtiment d'une école"
          />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          <div className="max-w-3xl mx-auto text-center pb-16">
            <h1 className="h1 font-playfair-display text-slate-100">Notre équipe</h1>
          </div>

          <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="100">
            <Image
              className="mx-auto object-cover h-[32rem]"
              src={TeamImage}
              width={1024}
              height={576}
              loading="lazy"
              alt="Notre équipe"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
