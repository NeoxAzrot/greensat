'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { forgotPassword } from '@/services/auth';

import { FormForgotPassword } from '@/types/form';

import { userAlreadyExists } from '@/utils/user';

const schema = yup
  .object({
    email: yup
      .string()
      .required("L'email est obligatoire.")
      .email("L'email doit être une adresse email valide.")
      .matches(/@etu\.toulouse-inp\.fr$/, "L'email doit se terminer par @etu.toulouse-inp.fr"),
  })
  .required();

const Form = () => {
  const [globalError, setGlobalError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const { status } = useSession();
  const router = useRouter();

  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: email || '',
    },
  });

  const onSubmit = async (data: FormForgotPassword) => {
    setGlobalError('');
    setSuccess(false);

    try {
      const user = await userAlreadyExists({
        email: data.email,
      });

      if (!user.exist) {
        setError('email', {
          type: 'manual',
          message: "Aucun compte n'est associé à cet email.",
        });

        return;
      } else {
        if (!user.data.confirmed) {
          setError('email', {
            type: 'manual',
            message: "Ce compte n'a pas été confirmé. Veuillez vérifier vos emails.",
          });

          return;
        }

        if (user.data.blocked) {
          setError('email', {
            type: 'manual',
            message: "Ce compte a été bloqué. Veuillez contacter l'administrateur.",
          });

          return;
        }
      }

      const result = await forgotPassword({
        email: data.email,
      });

      if (result.ok) {
        setSuccess(true);
      }
    } catch (error) {
      setGlobalError(
        'Une erreur est survenue lors de la demande de réinitialisation du mot de passe.',
      );
    }
  };

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email <span className="text-rose-500">*</span>
          </label>

          <input
            id="email"
            className="form-input py-2 w-full"
            type="text"
            autoComplete="email"
            {...register('email')}
          />

          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="mt-6">
        <button className="btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group">
          Envoyer le lien de réinitialisation{' '}
          <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
            -&gt;
          </span>
        </button>

        {globalError && <p className="text-sm text-red-500 mt-1">{globalError}</p>}

        {success && (
          <p className="text-sm text-emerald-500 mt-1">
            Un email de réinitialisation de mot de passe vous a été envoyé.
          </p>
        )}
      </div>

      <div className="text-center mt-5">
        <span className="text-sm text-slate-500">
          Vous avez déjà un compte ?{' '}
          <Link className="text-blue-600 hover:underline" href="/login" aria-label="Se connecter">
            Se connecter
          </Link>
        </span>
      </div>
    </form>
  );
};

export default Form;
