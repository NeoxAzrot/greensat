export interface DateAttributes {
  createdAt: Date;
  updatedAt: Date;
}

interface GlobalAttributes extends DateAttributes {
  publishedAt: Date;
}

export interface Global<T> {
  id: number;
  attributes: T & GlobalAttributes;
}

export interface GlobalArray<T> extends Array<Global<T>> {}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}

interface ImageProps {
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: {
      thumbnail?: ImageFormat;
      small?: ImageFormat;
      medium?: ImageFormat;
      large?: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: string;
    provider: string;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
  } & DateAttributes;
}

export interface Image {
  data: ImageProps;
}

export interface ImageArray {
  data: ImageProps[];
}
