import Image from 'next/image';

import EmaImage from '@/public/images/team/ema.webp';
import EveImage from '@/public/images/team/eve.webp';
import GregoryImage from '@/public/images/team/gregory.webp';
import JeanneImage from '@/public/images/team/jeanne.webp';

const TeamMembers = () => {
  return (
    <section className="bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">
              Nous sommes des étudiants de l’ENSAT, membre de Greensat
            </h2>
          </div>

          <div
            className="relative max-w-sm mx-auto grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-20 items-start sm:max-w-xl lg:max-w-none"
            data-aos-id-team
          >
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="inline-flex mb-4">
                <Image
                  className="rounded-full grayscale"
                  src={EmaImage}
                  width={120}
                  height={120}
                  loading="lazy"
                  alt="Ema"
                />
              </div>

              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Ema</h4>

              <div className="font-medium text-blue-600">Responsable trésorerie et évènements</div>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-team]"
              data-aos-delay={100}
            >
              <div className="inline-flex mb-4">
                <Image
                  className="rounded-full grayscale"
                  src={JeanneImage}
                  width={120}
                  height={120}
                  loading="lazy"
                  alt="Jeanne"
                />
              </div>

              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Jeanne</h4>

              <div className="font-medium text-blue-600">
                Responsable évènements et site internet
              </div>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-team]"
              data-aos-delay={200}
            >
              <div className="inline-flex mb-4">
                <Image
                  className="rounded-full grayscale"
                  src={EveImage}
                  width={120}
                  height={120}
                  loading="lazy"
                  alt="Eve"
                />
              </div>

              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Eve</h4>

              <div className="font-medium text-blue-600">Responsable communication et réseaux</div>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-team]"
              data-aos-delay={200}
            >
              <div className="inline-flex mb-4">
                <Image
                  className="rounded-full grayscale"
                  src={GregoryImage}
                  width={120}
                  height={120}
                  loading="lazy"
                  alt="Grégory"
                />
              </div>

              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Grégory</h4>

              <div className="font-medium text-blue-600">
                Responsable producteurs et partenaires
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
