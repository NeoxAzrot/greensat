import type { Schema, Attribute } from '@strapi/strapi';

export interface SurveysAnimal extends Schema.Component {
  collectionName: 'components_surveys_animals';
  info: {
    displayName: 'animal';
    icon: 'alien';
    description: '';
  };
  attributes: {
    mainProducerValues: Attribute.String;
    rearingMode: Attribute.RichText;
    feedSource: Attribute.RichText;
    antibioticTreatment: Attribute.RichText;
    welfareMeasures: Attribute.RichText;
    agroecologicalPractices: Attribute.RichText;
    effluentManagement: Attribute.RichText;
    wasteManagementProduction: Attribute.RichText;
    wasteManagementSales: Attribute.RichText;
    resourceConsumptionManagement: Attribute.RichText;
    carbonImpactMeasurement: Attribute.RichText;
    associativeEngagement: Attribute.RichText;
    jobSatisfaction: Attribute.RichText;
    additionalComment: Attribute.RichText;
  };
}

export interface SurveysStore extends Schema.Component {
  collectionName: 'components_surveys_stores';
  info: {
    displayName: 'store';
    icon: 'store';
    description: '';
  };
  attributes: {
    mainProducerValues: Attribute.String;
    productOriginInterest: Attribute.RichText;
    productOriginLabeling: Attribute.RichText;
    wasteManagement: Attribute.RichText;
    transparencyOnProducerCompensation: Attribute.RichText;
    productLabelingChoice: Attribute.RichText;
    additionalComment: Attribute.RichText;
  };
}

export interface SurveysTransform extends Schema.Component {
  collectionName: 'components_surveys_transforms';
  info: {
    displayName: 'transform';
    icon: 'cog';
    description: '';
  };
  attributes: {
    mainProducerValues: Attribute.String;
    rawMaterialQualityRequirements: Attribute.RichText;
    rawMaterialOriginAndLabeling: Attribute.RichText;
    resourceConsumptionManagement: Attribute.RichText;
    wasteManagement: Attribute.RichText;
    allergenLabeling: Attribute.RichText;
    producerLabels: Attribute.RichText;
    associativeEngagement: Attribute.RichText;
    jobSatisfaction: Attribute.RichText;
    additionalComment: Attribute.RichText;
  };
}

export interface SurveysVegetable extends Schema.Component {
  collectionName: 'components_surveys_vegetables';
  info: {
    displayName: 'vegetal';
    icon: 'seed';
    description: '';
  };
  attributes: {
    mainProducerValues: Attribute.String;
    cropOrganizationalOverview: Attribute.RichText;
    agroecologicalPractices: Attribute.RichText;
    greenhouseOrSoillessCultures: Attribute.RichText;
    phytosanitaryTreatments: Attribute.RichText;
    prophylacticMeasures: Attribute.RichText;
    wasteManagementProduction: Attribute.RichText;
    wasteManagementSales: Attribute.RichText;
    energyConsumptionManagement: Attribute.RichText;
    waterConsumptionManagement: Attribute.RichText;
    carbonImpactMeasurement: Attribute.RichText;
    associativeEngagement: Attribute.RichText;
    seasonalWorkers: Attribute.RichText;
    jobSatisfaction: Attribute.RichText;
    additionalComment: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'surveys.animal': SurveysAnimal;
      'surveys.store': SurveysStore;
      'surveys.transform': SurveysTransform;
      'surveys.vegetable': SurveysVegetable;
    }
  }
}
