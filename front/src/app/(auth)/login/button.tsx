'use client';

import { signIn } from 'next-auth/react';

const Button = () => {
  const onSubmit = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      email: 'sami.lepays+test@gmail.com',
      password: 'davidpiano31',
    });

    console.log(result);
  };

  return (
    <button
      className="btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group"
      onClick={onSubmit}
    >
      Se connecter{' '}
      <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
        -&gt;
      </span>
    </button>
  );
};

export default Button;
