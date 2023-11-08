import Image from 'next/image';
import Link from 'next/link';

import LogoImage from '@/public/images/favicon/logo.webp';

const Logo = () => {
  return (
    <Link
      href="/"
      className="block text-blue-600 transition duration-150 ease-in-out"
      aria-label="Cruip"
    >
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
