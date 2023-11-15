import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '@/public/images/favicon/logo.webp';

const Logo = () => {
  return (
    <Link href="/" className="inline-flex" aria-label="Greensa’table">
      <Image
        className="object-cover"
        src={LogoImage}
        width={40}
        height={40}
        priority
        alt="About intro"
      />
    </Link>
  );
};

export default Logo;
