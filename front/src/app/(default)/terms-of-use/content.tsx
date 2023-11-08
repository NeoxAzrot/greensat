import Link from 'next/link';

import Separator from '@/components/separator';

const TermsOfUseContent = () => {
  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="pt-8 mb-8">
          <div className="prose text-lg text-slate-500 max-w-none prose-lg prose-p:leading-normal prose-headings:font-playfair-display prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-slate-900 prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-slate-900 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit before:prose-p:content-[''] after:prose-p:content-[''] prose-hr:my-8">
            <p>
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance
              en l&apos;économie numérique, il est précisé aux utilisateurs du site Greensa’table
              l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son
              suivi.
            </p>

            <Separator />

            <h2>Édition du site</h2>
            <p>
              Le présent site, accessible à l’URL <Link href="/">greensatable.fr</Link> (le
              « Site »), est édité par :
            </p>
            <p>
              Greensat, dont le siège social est situé à Avenue de l&apos;Agrobiopole - 31320
              Auzeville-Tolosane, représenté(e) par Solveig Bakhuys dûment habilité(e).
            </p>
            <p>Le numéro individuel TVA de l’éditeur est : FR88899940191.</p>

            <Separator />

            <h2>Hébergement</h2>
            <p>
              Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann - BP 80157 - 59053
              Roubaix Cedex 1, (contact téléphonique ou email : 1007).
            </p>

            <Separator />

            <h2>Directeur de publication</h2>
            <p>Le Directeur de la publication du Site est Lise Michel.</p>

            <Separator />

            <h2>Nous contacter</h2>
            <p>
              {/* Par téléphone : +33 6 75 75 78 66 <br /> */}
              Par email : contact@greensatable.fr <br />
              Par courrier : Avenue de l&apos;Agrobiopole - 31320 Auzeville-Tolosane
            </p>

            <Separator />

            <h2>Données personnelles</h2>
            <p>
              Le traitement de vos données à caractère personnel est régi par notre Charte du
              respect de la vie privée, disponible depuis la section « Charte de Protection des
              Données Personnelles », conformément au Règlement Général sur la Protection des
              Données 2016/679 du 27 avril 2016 (« RGPD »).
            </p>

            <Separator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUseContent;
