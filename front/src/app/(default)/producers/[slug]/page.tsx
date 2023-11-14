import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Cta from '@/components/cta-dark';
import MapAndText from '@/components/map-and-text';
import Mdx from '@/components/mdx/mdx';
import PostDate from '@/components/post-date';
import PostItem from '@/components/post-item';
import Separator from '@/components/separator';

// import Testimonials from '@/components/testimonials';
import { getAllProducers, getOneProducerBySlug } from '@/services/producer';

import { AnimalSurvey, StoreSurvey, TransformSurvey, VegetalSurvey } from '@/types/surveys';

export const generateStaticParams = async () => {
  const producers = await getAllProducers({});

  return producers.data.map((producer) => ({
    slug: producer.attributes.slug,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> => {
  const producer = await getOneProducerBySlug({
    slug: params.slug,
  });

  if (!producer) return;

  const { title, summary: description, slug } = producer.data.attributes;

  return {
    title,
    description,
    alternates: {
      canonical: `https://greensatable.fr/producers/${slug}`,
      languages: {
        fr: `https://greensatable.fr/producers/${slug}`,
      },
    },
    openGraph: {
      title,
      url: `https://greensatable.fr/producers/${slug}`,
      description,
    },
    twitter: {
      title,
      description,
    },
    appLinks: {
      web: {
        url: `https://greensatable.fr/producers/${slug}`,
      },
    },
  };
};

const AnimalSurveyRender = (survey: AnimalSurvey) => {
  return (
    <>
      {(survey.rearingMode ||
        survey.feedSource ||
        survey.antibioticTreatment ||
        survey.welfareMeasures ||
        survey.agroecologicalPractices) && (
        <div>
          <h2>Mode d&apos;élevage</h2>

          {survey.rearingMode && (
            <>
              <h3>
                Quel est le mode d&apos;élevage des animaux ? (Hors sol, accès plein air, intensif,
                extensif, ...)
              </h3>
              <Mdx code={survey.rearingMode} />
            </>
          )}

          {survey.feedSource && (
            <>
              <h3>D&apos;où viennent les aliments donnés aux animaux ?</h3>
              <Mdx code={survey.feedSource} />
            </>
          )}

          {survey.antibioticTreatment && (
            <>
              <h3>Les animaux sont-ils traités avec des antibiotiques ?</h3>
              <Mdx code={survey.antibioticTreatment} />
            </>
          )}

          {survey.welfareMeasures && (
            <>
              <h3>
                Des choses sont-elles mises en place pour le bien-être animal ? Si oui, lesquelles ?
              </h3>
              <Mdx code={survey.welfareMeasures} />
            </>
          )}

          {survey.agroecologicalPractices && (
            <>
              <h3>
                Des pratiques agroécologiques sont-elles mises en place ? Si oui, lesquelles ?
              </h3>
              <Mdx code={survey.agroecologicalPractices} />
            </>
          )}

          <Separator />
        </div>
      )}

      {(survey.effluentManagement ||
        survey.wasteManagementProduction ||
        survey.wasteManagementSales ||
        survey.resourceConsumptionManagement ||
        survey.carbonImpactMeasurement) && (
        <div>
          <h2>Environnement et ressources</h2>

          {survey.effluentManagement && (
            <>
              <h3>Comment sont gérés les effluents ?</h3>
              <Mdx code={survey.effluentManagement} />
            </>
          )}

          {survey.wasteManagementProduction && (
            <>
              <h3>
                Le producteur porte-t-il une attention particulière à la gestion de ses déchets lors
                de la production ? Si oui, qu&apos;est ce qui est mis en place ?
              </h3>
              <Mdx code={survey.wasteManagementProduction} />
            </>
          )}

          {survey.wasteManagementSales && (
            <>
              <h3>
                Le producteur porte-t-il une attention particulière à la gestion de ses déchets lors
                de la vente ? Si oui, qu&apos;est ce qui est mis en place ?
              </h3>
              <Mdx code={survey.wasteManagementSales} />
            </>
          )}

          {survey.resourceConsumptionManagement && (
            <>
              <h3>
                Le producteur fait-il attention à réguler sa consommation en eau et en énergie (gaz,
                électricité, ...) ? Si oui, qu&apos;est ce qui est mis en place ?
              </h3>
              <Mdx code={survey.resourceConsumptionManagement} />
            </>
          )}

          {survey.carbonImpactMeasurement && (
            <>
              <h3>
                Le producteur est-il capable de mesurer l&apos;impact carbone de son exploitation,
                de ses produits ? Si oui, quelle est-elle ?
              </h3>
              <Mdx code={survey.carbonImpactMeasurement} />
            </>
          )}

          <Separator />
        </div>
      )}

      {(survey.associativeEngagement || survey.jobSatisfaction || survey.additionalComment) && (
        <div>
          <h2>Engagement et démarche éthique</h2>

          {survey.associativeEngagement && (
            <>
              <h3>Le producteur est-il engagé dans des démarches associatives ?</h3>
              <Mdx code={survey.associativeEngagement} />
            </>
          )}

          {survey.jobSatisfaction && (
            <>
              <h3>Le producteur et ses employés/associés sont-ils heureux dans leur travail ?</h3>
              <Mdx code={survey.jobSatisfaction} />
            </>
          )}

          {survey.additionalComment && (
            <>
              <h3>Un commentaire en plus ?</h3>
              <Mdx code={survey.additionalComment} />
            </>
          )}
        </div>
      )}
    </>
  );
};

const StoreSurveyRender = (survey: StoreSurvey) => {
  return (
    <>
      {(survey.productOriginInterest ||
        survey.productOriginLabeling ||
        survey.wasteManagement ||
        survey.transparencyOnProducerCompensation ||
        survey.productLabelingChoice ||
        survey.additionalComment) && (
        <div>
          <h2>Questions / Réponses</h2>

          {survey.productOriginInterest && (
            <>
              <h3>Quel intérêt le commerçant accorde à la provenance des produits ?</h3>
              <Mdx code={survey.productOriginInterest} />
            </>
          )}

          {survey.productOriginLabeling && (
            <>
              <h3>La provenance des produits est-elle toujours indiquée ?</h3>
              <Mdx code={survey.productOriginLabeling} />
            </>
          )}

          {survey.wasteManagement && (
            <>
              <h3>
                Comment se passe la gestion des déchets ? Quels dispositifs sont ou vont être mis en
                place ?
              </h3>
              <Mdx code={survey.wasteManagement} />
            </>
          )}

          {survey.transparencyOnProducerCompensation && (
            <>
              <h3>
                Le commerçant est-il prêt à être transparent sur la rémunération des producteurs qui
                fournissent le magasin ? Sur la manière dont sont fixés les prix des produits ?
              </h3>
              <Mdx code={survey.transparencyOnProducerCompensation} />
            </>
          )}

          {survey.productLabelingChoice && (
            <>
              <h3>
                Le magasin commercialise des produits avec des labels. Pourquoi ce choix et quels
                sont ces labels ? Si ce n&apos;est pas le cas, pourquoi ?
              </h3>
              <Mdx code={survey.productLabelingChoice} />
            </>
          )}

          {survey.additionalComment && (
            <>
              <h3>Un commentaire en plus ?</h3>
              <Mdx code={survey.additionalComment} />
            </>
          )}
        </div>
      )}
    </>
  );
};

const TransformSurveyRender = (survey: TransformSurvey) => {
  return (
    <>
      {(survey.rawMaterialQualityRequirements ||
        survey.rawMaterialOriginAndLabeling ||
        survey.resourceConsumptionManagement ||
        survey.wasteManagement) && (
        <div>
          <h2>Environnement</h2>

          {survey.rawMaterialQualityRequirements && (
            <>
              <h3>
                Quelles sont les exigences du producteur sur la qualité des matières premières
                utilisées ?
              </h3>
              <Mdx code={survey.rawMaterialQualityRequirements} />
            </>
          )}

          {survey.rawMaterialOriginAndLabeling && (
            <>
              <h3>
                D&apos;où proviennent les matières premières ? La provenance et les fournisseurs
                sont-ils indiqués sur les produits ?
              </h3>
              <Mdx code={survey.rawMaterialOriginAndLabeling} />
            </>
          )}

          {survey.resourceConsumptionManagement && (
            <>
              <h3>
                Le producteur fait-il attention à réguler sa consommation en eau et en énergie (gaz,
                électricité, ...) ? Si oui, qu&apos;est ce qui est mis en place ?
              </h3>
              <Mdx code={survey.resourceConsumptionManagement} />
            </>
          )}

          {survey.wasteManagement && (
            <>
              <h3>
                Le producteur porte-t-il une attention particulière à la gestion de ses déchets lors
                de la production/vente ? Si oui, qu&apos;est ce qui est mis en place ?
              </h3>
              <Mdx code={survey.wasteManagement} />
            </>
          )}

          <Separator />
        </div>
      )}

      {(survey.allergenLabeling ||
        survey.producerLabels ||
        survey.associativeEngagement ||
        survey.jobSatisfaction ||
        survey.additionalComment) && (
        <div>
          <h2>Engagement et démarche éthique</h2>

          {survey.allergenLabeling && (
            <>
              <h3>Les allergènes des produits sont-ils systématiquement renseignés ?</h3>
              <Mdx code={survey.allergenLabeling} />
            </>
          )}

          {survey.producerLabels && (
            <>
              <h3>Le producteur possède-t-il des labels/appellations ? Si oui, le(s)quel(s) ?</h3>
              <Mdx code={survey.producerLabels} />
            </>
          )}

          {survey.associativeEngagement && (
            <>
              <h3>Le producteur est-il engagé dans des démarches associatives ?</h3>
              <Mdx code={survey.associativeEngagement} />
            </>
          )}

          {survey.jobSatisfaction && (
            <>
              <h3>Le producteur et ses employés/associés sont-ils heureux dans leur travail ?</h3>
              <Mdx code={survey.jobSatisfaction} />
            </>
          )}

          {survey.additionalComment && (
            <>
              <h3>Un commentaire en plus ?</h3>
              <Mdx code={survey.additionalComment} />
            </>
          )}
        </div>
      )}
    </>
  );
};

const VegetalSurveyRender = (survey: VegetalSurvey) => {
  return (
    <>
      {(survey.cropOrganizationalOverview ||
        survey.agroecologicalPractices ||
        survey.greenhouseOrSoillessCultures ||
        survey.phytosanitaryTreatments ||
        survey.prophylacticMeasures) && (
        <div>
          <h2>Pratique culturale</h2>

          {survey.cropOrganizationalOverview && (
            <>
              <h3>En quelques mots, comment s&apos;organise la culture ?</h3>
              <Mdx code={survey.cropOrganizationalOverview} />
            </>
          )}

          {survey.agroecologicalPractices && (
            <>
              <h3>
                Des pratiques agroécologiques sont-elles mises en place ? Si oui, lesquelles ?
              </h3>
              <Mdx code={survey.agroecologicalPractices} />
            </>
          )}

          {survey.greenhouseOrSoillessCultures && (
            <>
              <h3>
                Des cultures hors sol ou dans des serres chauffées sont-elles présentes sur
                l&apos;exploitation ? Si oui, comment s&apos;organisent-elles et dans quel but
                sont-elles mises en place ?
              </h3>
              <Mdx code={survey.greenhouseOrSoillessCultures} />
            </>
          )}

          {survey.phytosanitaryTreatments && (
            <>
              <h3>
                Le producteur fait-il des traitements phytosanitaires ? Si oui, est-il d&apos;accord
                pour les transmettre ?
              </h3>
              <Mdx code={survey.phytosanitaryTreatments} />
            </>
          )}

          {survey.prophylacticMeasures && (
            <>
              <h3>
                Le producteur met-il en place des mesures prophylactiques ? Si oui, lesquelles ?
              </h3>
              <Mdx code={survey.prophylacticMeasures} />
            </>
          )}

          <Separator />
        </div>
      )}

      {(survey.wasteManagementProduction ||
        survey.wasteManagementSales ||
        survey.energyConsumptionManagement ||
        survey.waterConsumptionManagement ||
        survey.carbonImpactMeasurement) && (
        <div>
          <h2>Environnement et ressources</h2>

          {survey.wasteManagementProduction && (
            <>
              <h3>
                Le producteur porte-t-il une attention particulière à la gestion de ses déchets lors
                de la production ? Si oui, qu&apos;est ce qui est mis en place ?
              </h3>
              <Mdx code={survey.wasteManagementProduction} />
            </>
          )}

          {survey.wasteManagementSales && (
            <>
              <h3>
                Le producteur porte-t-il une attention particulière à la gestion de ses déchets lors
                de la vente ? Si oui, qu&apos;est ce qui est mis en place ?
              </h3>
              <Mdx code={survey.wasteManagementSales} />
            </>
          )}

          {survey.energyConsumptionManagement && (
            <>
              <h3>
                Le producteur fait-il attention à réguler sa consommation en énergie (gaz,
                électricité, ...) ? Si oui, qu&apos;est ce qui est mis en place ?
              </h3>
              <Mdx code={survey.energyConsumptionManagement} />
            </>
          )}

          {survey.waterConsumptionManagement && (
            <>
              <h3>Comment est gérée la consommation d&apos;eau sur l&apos;exploitation ?</h3>
              <Mdx code={survey.waterConsumptionManagement} />
            </>
          )}

          {survey.carbonImpactMeasurement && (
            <>
              <h3>
                Le producteur est-il capable de mesurer l&apos;impact carbone de son exploitation,
                de ses produits ? Si oui, quelle est-elle ?
              </h3>
              <Mdx code={survey.carbonImpactMeasurement} />
            </>
          )}

          <Separator />
        </div>
      )}

      {(survey.associativeEngagement ||
        survey.seasonalWorkers ||
        survey.jobSatisfaction ||
        survey.additionalComment) && (
        <div>
          <h2>Engagement et démarche éthique</h2>

          {survey.associativeEngagement && (
            <>
              <h3>Le producteur est-il engagé dans des démarches associatives ?</h3>
              <Mdx code={survey.associativeEngagement} />
            </>
          )}

          {survey.seasonalWorkers && (
            <>
              <h3>Y a-t-il des travailleurs saisonniers sur l&apos;exploitation ?</h3>
              <Mdx code={survey.seasonalWorkers} />
            </>
          )}

          {survey.jobSatisfaction && (
            <>
              <h3>Le producteur et ses employés/associés sont-ils heureux dans leur travail ?</h3>
              <Mdx code={survey.jobSatisfaction} />
            </>
          )}

          {survey.additionalComment && (
            <>
              <h3>Un commentaire en plus ?</h3>
              <Mdx code={survey.additionalComment} />
            </>
          )}
        </div>
      )}
    </>
  );
};

const Producer = async ({ params }: { params: { slug: string } }) => {
  const producers = await getAllProducers({
    sort: 'title',
    populate: '*',
    filters: {
      '[slug][$ne]': params.slug,
    },
  });

  const relatedProducers = producers.data.sort(() => Math.random() - Math.random()).slice(0, 3);

  const producer = await getOneProducerBySlug({
    slug: params.slug,
  });

  if (!producer) notFound();

  const data = producer.data.attributes;
  const survey = data.survey[0];

  // const likes = data.usersLikes.data.length;

  return (
    <>
      <article>
        <header className="relative">
          {/* Dark background */}
          <div
            className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 mb-36 lg:mb-0 lg:h-[48rem] [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]"
            aria-hidden="true"
          ></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 md:pt-40 pb-8">
              <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                  {/* Title and excerpt */}
                  <div className="text-center md:text-left">
                    <Link
                      className="inline-flex font-semibold text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out group mb-2"
                      href="/producers"
                      data-aos="fade-down"
                    >
                      <span className="tracking-normal text-blue-600 group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1">
                        &lt;-
                      </span>{' '}
                      Revenir à la carte
                    </Link>
                    <h1 className="h2 font-playfair-display text-slate-100 mb-6">{data.title}</h1>
                  </div>
                  {/* Article meta */}
                  <div
                    className="md:flex md:items-center md:justify-between mt-3"
                    data-aos="fade-up"
                  >
                    {/* Author meta */}
                    <div className="flex items-center justify-center">
                      <span className="text-slate-400">
                        <PostDate dateString={data.publishedAt.toString()} />
                      </span>
                    </div>
                    {/* Social links */}
                    {/* TODO: Add number of likes for the month */}
                    {/* <div className="flex justify-center mt-4 md:mt-0">
                      <ul className="flex space-x-5 mb-4 md:order-1 md:ml-4 md:mb-0">
                        <li>
                          <a
                            className="text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out"
                            href="#0"
                            aria-label="Twitter"
                          >
                            <svg
                              className="w-5 h-5 fill-current"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 0 1 3.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out"
                            href="#0"
                            aria-label="Twitter"
                          >
                            <svg
                              className="w-5 h-5 fill-current"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M20 3.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0 0 19.5 2.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 0 0-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.164-6.5-1.814-8.5-4.288C1 3.32.833 3.98.833 4.722c0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C4.667 15.608 2.917 16.268 1 16.268c-.333 0-.667 0-1-.082C1.833 17.34 4 18 6.25 18c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062Z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out"
                            href="#0"
                            aria-label="Twitter"
                          >
                            <svg
                              className="w-5 h-5 fill-current"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10 0C4.5 0 0 4.5 0 10c0 4.25 2.667 7.833 6.333 9.333-.083-.75-.166-2 0-2.833.167-.75 1.167-5 1.167-5s-.25-.667-.25-1.5c0-1.417.833-2.417 1.833-2.417.834 0 1.25.667 1.25 1.417 0 .833-.583 2.167-.833 3.333-.25 1 .5 1.834 1.5 1.834 1.75 0 3.167-1.834 3.167-4.584 0-2.416-1.75-4.083-4.167-4.083-2.833 0-4.5 2.167-4.5 4.333 0 .834.333 1.75.75 2.25.083.084.083.167.083.25-.083.334-.25 1-.25 1.167-.083.167-.166.25-.333.167-1.25-.584-2-2.417-2-3.834 0-3.166 2.333-6.083 6.583-6.083 3.5 0 6.167 2.5 6.167 5.75 0 3.417-2.167 6.25-5.167 6.25-1 0-2-.5-2.333-1.167 0 0-.5 1.917-.583 2.417-.25.833-.834 1.917-1.25 2.583C8 19.833 9 20 10 20c5.5 0 10-4.5 10-10S15.5 0 10 0Z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                </div>

                {/* Article image */}
                {data.image && (
                  <figure>
                    <Image
                      className="w-full"
                      src={data.image.data.attributes.url}
                      width={768}
                      height={432}
                      priority
                      alt={data.title}
                    />
                  </figure>
                )}
              </div>
            </div>
          </div>
        </header>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-14">
          <div className="max-w-3xl mx-auto">
            {data.summary && (
              <p className="text-lg text-slate-500 border-l-2 border-slate-800 pl-4 mb-8">
                {data.summary}
              </p>
            )}

            <div className="prose text-lg text-slate-500 max-w-none prose-lg prose-p:leading-normal prose-headings:font-playfair-display prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-slate-900 prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-slate-900 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit before:prose-p:content-[''] after:prose-p:content-[''] prose-hr:my-8">
              <h3>
                En trois mots : quelles sont les valeurs/idées principales portées par le
                producteur ?
              </h3>
              <p>{data.survey[0].mainProducerValues}</p>
            </div>
          </div>
        </div>

        <MapAndText producer={producer.data} />

        {/* TODO: Add product free */}
        {/* TODO: Add producer discount information */}

        {/* <Testimonials /> */}

        {/* Article content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose text-lg text-slate-500 max-w-none prose-lg prose-p:leading-normal prose-headings:font-playfair-display prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:font-medium prose-strong:text-slate-900 prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:border-slate-900 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-inherit before:prose-p:content-[''] after:prose-p:content-[''] prose-hr:my-8">
              {survey?.__component === 'surveys.animal' && AnimalSurveyRender(survey)}
              {survey?.__component === 'surveys.store' && StoreSurveyRender(survey)}
              {survey?.__component === 'surveys.transform' && TransformSurveyRender(survey)}
              {survey?.__component === 'surveys.vegetable' && VegetalSurveyRender(survey)}
            </div>
          </div>
        </div>
      </article>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="my-12 md:my-20 border-t border-slate-200" />

        <h2 className="h3 font-playfair-display text-center md:text-left mb-8">
          Découvrez d&apos;autres producteurs
        </h2>

        {/* Articles container */}
        <div className="max-w-sm mx-auto md:max-w-none grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
          {relatedProducers.map((relatedProcuder) => (
            <PostItem key={relatedProcuder.id} {...relatedProcuder} />
          ))}
        </div>
      </div>

      <Separator />

      <Cta />
    </>
  );
};

export default Producer;
