import Image from 'next/image';

import TeamMemberImage01 from '@/public/images/template/team-member-01.jpg';
import TeamMemberImage02 from '@/public/images/template/team-member-02.jpg';
import TeamMemberImage03 from '@/public/images/template/team-member-03.jpg';
import TeamMemberImage04 from '@/public/images/template/team-member-04.jpg';
import TeamMemberImage05 from '@/public/images/template/team-member-05.jpg';
import TeamMemberImage06 from '@/public/images/template/team-member-06.jpg';

const TeamMembers = () => {
  return (
    <section className="bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-playfair-display text-slate-800">
              Nous sommes des étudiants de l’ENSAT, membre de Greensat
            </h2>
          </div>

          {/* Team members */}
          <div
            className="relative max-w-sm mx-auto grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 items-start sm:max-w-xl lg:max-w-none"
            data-aos-id-team
          >
            {/* 1st member */}
            <div className="text-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="inline-flex mb-4">
                <Image
                  className="rounded-full"
                  src={TeamMemberImage01}
                  width={120}
                  height={120}
                  alt="Member 01"
                />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Lise</h4>
              <div className="font-medium text-blue-600">
                Capitaine d&apos;équipe et responsable site internet
              </div>
            </div>

            {/* 2nd member */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-team]"
              data-aos-delay={100}
            >
              <div className="inline-flex mb-4">
                <Image
                  className="rounded-full"
                  src={TeamMemberImage02}
                  width={120}
                  height={120}
                  alt="Member 02"
                />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Maé</h4>
              <div className="font-medium text-blue-600">Trésorière</div>
            </div>

            {/* 3rd member */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-team]"
              data-aos-delay={200}
            >
              <div className="inline-flex mb-4">
                <Image
                  className="rounded-full"
                  src={TeamMemberImage03}
                  width={120}
                  height={120}
                  alt="Member 03"
                />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Clémence et Ambre</h4>
              <div className="font-medium text-blue-600">Responsable communication et réseau</div>
            </div>

            {/* 4th member */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-team]"
              data-aos-delay={300}
            >
              <div className="inline-flex mb-4">
                <Image
                  className="rounded-full"
                  src={TeamMemberImage04}
                  width={120}
                  height={120}
                  alt="Member 04"
                />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Alice</h4>
              <div className="font-medium text-blue-600">Responsable évènement</div>
            </div>

            {/* 5th member */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-team]"
              data-aos-delay={400}
            >
              <div className="inline-flex mb-4">
                <Image
                  className="rounded-full"
                  src={TeamMemberImage05}
                  width={120}
                  height={120}
                  alt="Member 05"
                />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">Camille et Alex</h4>
              <div className="font-medium text-blue-600">
                Responsables partenaires et producteurs
              </div>
            </div>

            {/* 6th member */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-team]"
              data-aos-delay={500}
            >
              <div className="inline-flex mb-4">
                <Image
                  className="rounded-full"
                  src={TeamMemberImage06}
                  width={120}
                  height={120}
                  alt="Member 06"
                />
              </div>
              <h4 className="h4 font-playfair-display text-slate-800 mb-2">
                Samuel, Paul et Margot
              </h4>
              <div className="font-medium text-blue-600">
                Acteurs couteaux-suisses et petites mains
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
