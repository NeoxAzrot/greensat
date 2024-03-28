import { Global, GlobalArray } from './global';
import { Product } from './product';
import { SimpleUser } from './user';

interface SimpleProps {
  confirmed: boolean;
  canceled: boolean;
  confirmationDate: Date | null;
  cancelationDate: Date | null;
  reservationDate: Date;
}

interface Props extends SimpleProps {
  product: {
    data: Product;
  };
  user: {
    data: SimpleUser;
  };
}

interface UpdateProps extends SimpleProps {
  product?: number | null;
  user?: number;
}

interface CreateProps extends SimpleProps {
  product: number;
  user: number;
}

export interface SimpleReservation extends Global<SimpleProps> {}
export interface Reservation extends Global<Props> {}
export interface UpdateReservation extends UpdateProps {}
export interface CreateReservation extends CreateProps {}

export interface Reservations extends GlobalArray<Props> {}
