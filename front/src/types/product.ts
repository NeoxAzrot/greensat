import { Global, GlobalArray, Image } from './global';
import { SimpleProducer } from './producer';
import { SimpleUser } from './user';

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
  users: {
    data: SimpleUser[];
  };
}

interface UpdateProps extends SimpleProps {
  image?: Image;
  producer?: number[];
  users?: number[];
}

export interface SimpleProduct extends Global<SimpleProps> {}
export interface Product extends Global<Props> {}
export interface UpdateProduct extends UpdateProps {}

export interface Products extends GlobalArray<Props> {}
