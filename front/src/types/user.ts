import { DateAttributes } from './global';
import { SimpleProducer } from './producer';
import { SimpleProduct } from './product';

interface Global extends DateAttributes {
  id: number;
}

interface SimpleProps extends Global {
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  firstname: string;
  lastname: string;
  slug: string;
  studentNumber?: string;
  phoneNumber?: string;
  username: string;
}

interface GlobalSimpleUserRelationProps {
  id: number;
  attributes: Omit<SimpleProps, 'id'>;
}

interface Props extends SimpleProps {
  producersLikes: SimpleProducer[];
  products: SimpleProduct[];
}

export interface SimpleUser extends GlobalSimpleUserRelationProps {}
export interface User extends Props {}

export interface Users extends Array<Props> {}
