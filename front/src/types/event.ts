import { Content } from './content';
import { Global, GlobalArray, Image } from './global';

interface SimpleProps {
  title: string;
  summary: string;
  date: Date;
  latitude?: number;
  longitude?: number;
  address?: string;
  distance?: string;
  slug: string;
  content: Content[];
}

interface Props extends SimpleProps {
  image: Image;
}

interface UpdateProps extends SimpleProps {
  image?: Image;
}

export interface SimpleEvent extends Global<SimpleProps> {}
export interface Event extends Global<Props> {}
export interface UpdateEvent extends UpdateProps {}

export interface Events extends GlobalArray<Props> {}
