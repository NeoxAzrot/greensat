import { StaticImageData } from 'next/image';

import AgroecologicalPracticesImage from '@/public/images/icons/agroecological-practices.webp';
import AnimalWelfareImage from '@/public/images/icons/animal-welfare.webp';
import CommunityEngagementImage from '@/public/images/icons/community-engagement.webp';
import FreeRangeFarmingImage from '@/public/images/icons/free-range-farming.webp';
import LocalSourcingImage from '@/public/images/icons/local-sourcing.webp';
import TransformingProducerImage from '@/public/images/icons/transforming-producer.webp';
import TransparencyAndSharingImage from '@/public/images/icons/transparency-and-sharing.webp';
import WasteReductionImage from '@/public/images/icons/waste-reduction.webp';

import { Pictos } from '@/types/producer';

interface PictosImagesProps {
  pictos: Pictos[];
}

type Data = {
  [PICTO in Pictos]: {
    image: StaticImageData;
    caption: string;
  };
};

export const getPictosImages = ({ pictos }: PictosImagesProps) => {
  const data: Data = {
    animalWelfare: {
      image: AnimalWelfareImage,
      caption: 'Bien-être animal',
    },
    freeRangeFarming: {
      image: FreeRangeFarmingImage,
      caption: 'Pâturage/élevage en plein air',
    },
    transformingProducer: {
      image: TransformingProducerImage,
      caption: 'Producteur transformateur',
    },
    wasteReduction: {
      image: WasteReductionImage,
      caption: 'Réduction des déchets',
    },
    agroecologicalPractices: {
      image: AgroecologicalPracticesImage,
      caption: 'Pratiques agroécologiques',
    },
    communityEngagement: {
      image: CommunityEngagementImage,
      caption: 'Engagement solidaire ou social',
    },
    localSourcing: {
      image: LocalSourcingImage,
      caption: 'Approvisionnement local',
    },
    transparencyAndSharing: {
      image: TransparencyAndSharingImage,
      caption: 'Transparence et partage',
    },
  };

  return pictos.map((picto) => data[picto]);
};
