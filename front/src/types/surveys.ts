interface GlobalSurvey {
  id: number;
}

export interface AnimalSurvey extends GlobalSurvey {
  __component: 'surveys.animal';
  mainProducerValues: string;
  rearingMode?: string;
  feedSource?: string;
  antibioticTreatment?: string;
  welfareMeasures?: string;
  agroecologicalPractices?: string;
  effluentManagement?: string;
  wasteManagementProduction?: string;
  wasteManagementSales?: string;
  resourceConsumptionManagement?: string;
  carbonImpactMeasurement?: string;
  associativeEngagement?: string;
  jobSatisfaction?: string;
  additionalComment?: string;
}

export interface StoreSurvey extends GlobalSurvey {
  __component: 'surveys.store';
  mainProducerValues: string;
  productOriginInterest?: string;
  productOriginLabeling?: string;
  wasteManagement?: string;
  transparencyOnProducerCompensation?: string;
  productLabelingChoice?: string;
  additionalComment?: string;
}

export interface TransformSurvey extends GlobalSurvey {
  __component: 'surveys.transform';
  mainProducerValues: string;
  rawMaterialQualityRequirements?: string;
  rawMaterialOriginAndLabeling?: string;
  resourceConsumptionManagement?: string;
  wasteManagement?: string;
  allergenLabeling?: string;
  producerLabels?: string;
  associativeEngagement?: string;
  jobSatisfaction?: string;
  additionalComment?: string;
}

export interface VegetalSurvey extends GlobalSurvey {
  __component: 'surveys.vegetable';
  mainProducerValues: string;
  cropOrganizationalOverview?: string;
  agroecologicalPractices?: string;
  greenhouseOrSoillessCultures?: string;
  phytosanitaryTreatments?: string;
  prophylacticMeasures?: string;
  wasteManagementProduction?: string;
  wasteManagementSales?: string;
  energyConsumptionManagement?: string;
  waterConsumptionManagement?: string;
  carbonImpactMeasurement?: string;
  associativeEngagement?: string;
  seasonalWorkers?: string;
  jobSatisfaction?: string;
  additionalComment?: string;
}

export type Survey = AnimalSurvey | StoreSurvey | TransformSurvey | VegetalSurvey;
