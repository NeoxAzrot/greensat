'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { changePasswordUser, updateUser } from '@/services/user';

import { FormUpdateAccount } from '@/types/form';
import { User } from '@/types/user';

import { JwtUserProps } from '@/utils/auth';
import { userAlreadyExists } from '@/utils/user';

interface FormProps {
  user: User;
}

const schema = yup
  .object()
  .shape(
    {
      firstname: yup.string().required('Le prénom est obligatoire.'),
      lastname: yup.string().required('Le nom est obligatoire.'),
      studentNumber: yup
        .string()
        .matches(/^(\d{10}[A-Z]{1}|\d{9}[A-Z]{2})$/, {
          message:
            'Le numéro étudiant doit être composé de 10 chiffres et 1 lettre ou 9 chiffres et 2 lettres.',
          excludeEmptyString: true,
        })
        .optional(),
      email: yup
        .string()
        .required("L'email est obligatoire.")
        .email("L'email doit être une adresse email valide."),
      // .matches(/@etu\.toulouse-inp\.fr$/, "L'email doit se terminer par @etu.toulouse-inp.fr"),
      phoneNumber: yup
        .string()
        .required('Le numéro de téléphone est obligatoire.')
        .matches(
          /^(\+33\s?|0)(6|7)\s?(\d{2}\s?){4}$/,
          'Le numéro de téléphone doit être un numéro valide.',
        ),
      currentPassword: yup
        .string()
        .when(['newPassword', 'newPasswordConfirmation'], {
          is: (newPassword: string, newPasswordConfirmation: string) =>
            newPassword || newPasswordConfirmation,
          then: () => yup.string().required('Le mot de passe actuel est requis.'),
        })
        .optional(),
      newPassword: yup
        .string()
        .when(['currentPassword', 'newPasswordConfirmation'], {
          is: (currentPassword: string, newPasswordConfirmation: string) =>
            currentPassword || newPasswordConfirmation,
          then: () =>
            yup
              .string()
              .required('Un nouveau mot de passe est requis.')
              .min(8, 'Le mot de passe doit contenir au moins 8 caractères.')
              .matches(/[a-z]/, 'Le mot de passe doit contenir au moins une minuscule.')
              .matches(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule.')
              .matches(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre.')
              .matches(
                /[^a-zA-Z0-9]/,
                'Le mot de passe doit contenir au moins un caractère spécial.',
              )
              .notOneOf(
                [yup.ref('currentPassword')],
                'Le nouveau mot de passe doit être différent du mot de passe actuel.',
              ),
        })
        .optional(),
      newPasswordConfirmation: yup
        .string()
        .when(['currentPassword', 'newPassword'], {
          is: (currentPassword: string, newPassword: string) => currentPassword || newPassword,
          then: () =>
            yup
              .string()
              .required('La confirmation du nouveau mot de passe est requise.')
              .oneOf([yup.ref('newPassword')], 'Les mots de passe doivent correspondre.'),
        })
        .optional(),
    },
    [
      ['currentPassword', 'newPasswordConfirmation'],
      ['currentPassword', 'newPassword'],
      ['newPassword', 'newPasswordConfirmation'],
    ],
  )
  .required();

const Form = ({ user }: FormProps) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState<boolean>(false);
  const [globalError, setGlobalError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const { data: session } = useSession();
  const router = useRouter();

  const userSession = session?.user as unknown as JwtUserProps;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstname: user.firstname,
      lastname: user.lastname,
      studentNumber: user.studentNumber,
      email: user.email,
      phoneNumber: user.phoneNumber,
      currentPassword: '',
      newPassword: '',
      newPasswordConfirmation: '',
    },
  });

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmNewPasswordVisibility = () => {
    setShowConfirmNewPassword(!showConfirmNewPassword);
  };

  const handleLogout = () => {
    signOut({
      redirect: false,
    });

    router.push('/login');
  };

  const onSubmit = async (data: FormUpdateAccount) => {
    setGlobalError('');
    setSuccess(false);

    try {
      const userEmail = await userAlreadyExists({
        email: data.email,
      });

      if (userEmail.exist && userEmail.data.email !== user.email) {
        setError('email', {
          type: 'manual',
          message: 'Cet email est déjà utilisé.',
        });

        return;
      }

      if (data.currentPassword && data.newPassword && data.newPasswordConfirmation) {
        const result = await changePasswordUser({
          token: userSession.jwt,
          data: {
            currentPassword: data.currentPassword,
            password: data.newPassword,
            passwordConfirmation: data.newPasswordConfirmation,
          },
        });

        if (!result) {
          setError('currentPassword', {
            type: 'manual',
            message: 'Le mot de passe actuel est incorrect.',
          });

          return;
        }
      }

      const result = await updateUser({
        token: userSession.jwt,
        id: userSession.id,
        data: {
          firstname: data.firstname,
          lastname: data.lastname,
          studentNumber: data.studentNumber,
          email: data.email,
          phoneNumber: data.phoneNumber,
        },
      });

      if (result) {
        setSuccess(true);
      }
    } catch (error) {
      setGlobalError("Une erreur est survenue lors de l'inscription.");
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form className="w-full md:w-1/2" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <div className="sm:w-1/2">
              <label className="block text-sm font-medium mb-1" htmlFor="firstname">
                Prénom <span className="text-rose-500">*</span>
              </label>

              <input
                id="firstname"
                className="form-input py-2 w-full"
                type="text"
                autoComplete="given-name"
                {...register('firstname')}
              />

              {errors.firstname && (
                <p className="text-sm text-red-500 mt-1">{errors.firstname.message}</p>
              )}
            </div>

            <div className="sm:w-1/2">
              <label className="block text-sm font-medium mb-1" htmlFor="lastname">
                Nom <span className="text-rose-500">*</span>
              </label>

              <input
                id="lastname"
                className="form-input py-2 w-full"
                type="text"
                autoComplete="family-name"
                {...register('lastname')}
              />

              {errors.lastname && (
                <p className="text-sm text-red-500 mt-1">{errors.lastname.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="studentNumber">
              Numéro étudiant
            </label>

            <input
              id="studentNumber"
              className="form-input py-2 w-full"
              type="text"
              autoComplete="student-number"
              {...register('studentNumber')}
            />

            {errors.studentNumber && (
              <p className="text-sm text-red-500 mt-1">{errors.studentNumber.message}</p>
            )}
          </div>

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

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phoneNumber">
              Numéro de téléphone <span className="text-rose-500">*</span>
            </label>

            <input
              id="phoneNumber"
              className="form-input py-2 w-full"
              type="tel"
              autoComplete="tel"
              {...register('phoneNumber')}
            />

            {errors.phoneNumber && (
              <p className="text-sm text-red-500 mt-1">{errors.phoneNumber.message}</p>
            )}
          </div>
        </div>

        <div className="flex items-center my-6">
          <div className="border-t border-slate-200 grow mr-3" aria-hidden="true"></div>
          <div className="text-sm text-slate-500 italic">Changer de mot de passe</div>
          <div className="border-t border-slate-200 grow ml-3" aria-hidden="true"></div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="currentPassword">
              Mot de passe actuel
            </label>

            <div className="relative">
              <input
                id="currentPassword"
                className="form-input py-2 w-full pr-12"
                type={showCurrentPassword ? 'text' : 'password'}
                autoComplete="current-password"
                {...register('currentPassword')}
              />

              <div className="absolute inset-y-0 right-0 flex items-center mr-4">
                <span className="cursor-pointer" onClick={toggleCurrentPasswordVisibility}>
                  {showCurrentPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="h-5 w-5 fill-slate-800"
                    >
                      <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className="h-5 w-5 fill-slate-800"
                    >
                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
                    </svg>
                  )}
                </span>
              </div>
            </div>

            {errors.currentPassword && (
              <p className="text-sm text-red-500 mt-1">{errors.currentPassword.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="newPassword">
              Nouveau mot de passe
            </label>

            <div className="relative">
              <input
                id="newPassword"
                className="form-input py-2 w-full pr-12"
                type={showNewPassword ? 'text' : 'password'}
                autoComplete="new-password"
                {...register('newPassword')}
              />

              <div className="absolute inset-y-0 right-0 flex items-center mr-4">
                <span className="cursor-pointer" onClick={toggleNewPasswordVisibility}>
                  {showNewPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="h-5 w-5 fill-slate-800"
                    >
                      <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className="h-5 w-5 fill-slate-800"
                    >
                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
                    </svg>
                  )}
                </span>
              </div>
            </div>

            {errors.newPassword && (
              <p className="text-sm text-red-500 mt-1">{errors.newPassword.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="newPasswordConfirmation">
              Confirmation du nouveau mot de passe
            </label>

            <div className="relative">
              <input
                id="newPasswordConfirmation"
                className="form-input py-2 w-full pr-12"
                type={showConfirmNewPassword ? 'text' : 'password'}
                autoComplete="new-password"
                {...register('newPasswordConfirmation')}
              />

              <div className="absolute inset-y-0 right-0 flex items-center mr-4">
                <span className="cursor-pointer" onClick={toggleConfirmNewPasswordVisibility}>
                  {showConfirmNewPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="h-5 w-5 fill-slate-800"
                    >
                      <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className="h-5 w-5 fill-slate-800"
                    >
                      <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
                    </svg>
                  )}
                </span>
              </div>
            </div>

            {errors.newPasswordConfirmation && (
              <p className="text-sm text-red-500 mt-1">{errors.newPasswordConfirmation.message}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <button className="btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group">
            Modifier mes informations{' '}
            <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
              -&gt;
            </span>
          </button>

          {globalError && <p className="text-sm text-red-500 mt-1">{globalError}</p>}

          {success && (
            <p className="text-sm text-emerald-500 mt-1">
              Vos informations ont bien été modifiées.
            </p>
          )}
        </div>

        <div className="text-center mt-5">
          <span className="text-sm text-slate-500">
            <button
              className="text-blue-600 hover:underline"
              onClick={handleLogout}
              aria-label="Se déconnecter"
            >
              Se déconnecter
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
