'use client';

import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import { updateProducer } from '@/services/producer';

import { Producer } from '@/types/producer';

import { JwtUserProps } from '@/utils/auth';

interface LikesProps {
  producer: Producer;
}

const Likes = ({ producer }: LikesProps) => {
  const { data: session, status } = useSession();

  const defaultUsersLikes = producer.attributes.usersLikes.data.map((userLike) => userLike.id);
  const [usersLikes, setUsersLikes] = useState<number[]>(defaultUsersLikes);

  const router = useRouter();
  const pathname = usePathname();

  const user = session?.user as unknown as JwtUserProps;
  const likes = usersLikes.length;

  const handleClick = async () => {
    if (status === 'unauthenticated') {
      router.push(`/login?callbackUrl=${pathname}`);

      return;
    }

    if (user) {
      let newUsersLikes;

      if (usersLikes.includes(user.id)) {
        newUsersLikes = usersLikes.filter((userLike) => userLike !== user.id);
      } else {
        newUsersLikes = [...usersLikes, user.id];
      }

      const result = await updateProducer({
        token: user.jwt,
        id: producer.id,
        data: {
          usersLikes: newUsersLikes,
        },
      });

      if (result) {
        setUsersLikes(newUsersLikes);
      }
    }
  };

  return (
    <div className="flex flex-col items-end mt-4 md:mt-0">
      <div
        className="flex justify-center  font-semibold text-blue-600 hover:text-blue-500 transition duration-150 ease-in-out cursor-pointer"
        onClick={handleClick}
      >
        <p className="mr-2 select-none">{likes}</p>

        <svg
          className="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
        </svg>
      </div>

      {user && usersLikes.includes(user.id) && (
        <p className="text-sm text-slate-600">Tu as déjà aimé ce producteur</p>
      )}
    </div>
  );
};

export default Likes;
