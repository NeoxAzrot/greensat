import { Image } from './global';

interface GlobalContent {
  id: number;
}

export interface TextContent extends GlobalContent {
  __component: 'content.text';
  content: string;
}

export interface ImageContent extends GlobalContent {
  __component: 'content.image';
  image: Image;
}

export type Content = TextContent | ImageContent;
