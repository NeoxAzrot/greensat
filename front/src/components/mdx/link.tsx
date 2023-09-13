import Link from 'next/link';
import { ReactNode } from 'react';

interface PostLinkProps {
  href: string;
  children: ReactNode;
}

const PostLink = ({ href, children }: PostLinkProps) => {
  return <Link href={href}>{children}</Link>;
};

export default PostLink;
