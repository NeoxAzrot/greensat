import { Global, GlobalArray, Image, ImageArray } from './global';
import { SimpleProduct } from './product';
import { Survey } from './surveys';
import { SimpleUser } from './user';

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

export interface SimpleProducer extends Global<SimpleProps> {}
export interface Producer extends Global<Props> {}

export interface Producers extends GlobalArray<Props> {}
