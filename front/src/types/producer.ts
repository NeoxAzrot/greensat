import { Global, GlobalArray, Image, ImageArray } from './global';
import { SimpleProduct } from './product';
import { Survey } from './surveys';
import { SimpleUser } from './user';

export type Pictos =
  | 'animalWelfare'
  | 'freeRangeFarming'
  | 'transformingProducer'
  | 'wasteReduction'
  | 'agroecologicalPractices'
  | 'communityEngagement'
  | 'localSourcing'
  | 'transparencyAndSharing';

interface SimpleProps {
  title: string;
  summary: string;
  latitude: number;
  longitude: number;
  address: string;
  businessType: 'farm' | 'market' | 'store';
  slug: string;
  hours?: string;
  discount?: string;
  distance?: string;
  useVioletGround: 'yes' | 'no' | 'wouldLike';
  pictos?: Pictos[];
}

interface Props extends SimpleProps {
  image: Image;
  products: {
    data: SimpleProduct[];
  };
  usersLikes: {
    data: SimpleUser[];
  };
  survey: Survey[];
  labels: ImageArray;
}

interface UpdateProps extends SimpleProps {
  image?: Image;
  products?: number[];
  usersLikes?: number[];
  survey?: Survey[];
  labels?: ImageArray;
}

export interface SimpleProducer extends Global<SimpleProps> {}
export interface Producer extends Global<Props> {}
export interface UpdateProducer extends UpdateProps {}

export interface Producers extends GlobalArray<Props> {}
