import Image, { StaticImageData } from 'next/image';

interface PostImageProps {
  alt: string;
  caption?: string;
  size?: string;
  src: StaticImageData;
}

const PostImage = ({ alt, caption, size, src }: PostImageProps) => {
  const classes = size === 'lg' ? 'lg:-ml-32 lg:-mr-32' : '';

  return (
    <figure className={classes}>
      <Image className="w-full" src={src} alt={alt} />
      {caption && (
        <figcaption className="text-sm text-center text-gray-500 mt-3">{caption}</figcaption>
      )}
    </figure>
  );
};

export default PostImage;
