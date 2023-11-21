import Mdx from '@/components/mdx/mdx';
import Separator from '@/components/separator';

import { AnimalSurvey, StoreSurvey, TransformSurvey, VegetalSurvey } from '@/types/surveys';

export const AnimalSurveyRender = (survey: AnimalSurvey) => {
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

export const StoreSurveyRender = (survey: StoreSurvey) => {
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

export const TransformSurveyRender = (survey: TransformSurvey) => {
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

export const VegetalSurveyRender = (survey: VegetalSurvey) => {
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
