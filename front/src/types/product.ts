import { Global, GlobalArray, Image } from './global';
import { SimpleProducer } from './producer';
import { SimpleReservation } from './reservation';

interface SimpleProps {
  title: string;
  summary: string;
  count: number;
  active: boolean;
  discount: string;
}

interface Props extends SimpleProps {
  image: Image;
  producer: {
    data: SimpleProducer;
  };
  reservation: {
    data: SimpleReservation[];
  };
}

interface UpdateProps extends SimpleProps {
  image?: Image;
  producer?: number[];
}

export interface SimpleProduct extends Global<SimpleProps> {}
export interface Product extends Global<Props> {}
export interface UpdateProduct extends UpdateProps {}

export interface Products extends GlobalArray<Props> {}
