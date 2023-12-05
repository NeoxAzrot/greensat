'use client';

import { signOut } from 'next-auth/react';

const Form = () => {
  const handleLogout = () => {
    signOut();
  };

  return (
    <button onClick={handleLogout} className="btn btn-primary">
      Déconnexion
    </button>
  );
};

export default Form;
