import { DateAttributes } from './global';
import { SimpleProducer } from './producer';
import { SimpleReservation } from './reservation';

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
  reservations: SimpleReservation[];
}

interface UpdateProps extends SimpleProps {
  producersLikes?: number[];
  reservations?: number[];
}

export interface SimpleUser extends GlobalSimpleUserRelationProps {}
export interface SimpleAuthUser extends SimpleProps {}
export interface User extends Props {}
export interface UpdateUser extends UpdateProps {}

export interface Users extends Array<Props> {}
