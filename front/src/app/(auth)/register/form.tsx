'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
  .object({
    firstname: yup.string().required('Le prénom est obligatoire.'),
    lastname: yup.string().required('Le nom est obligatoire.'),
    studentNumber: yup
      .string()
      .required('Le numéro étudiant est obligatoire.')
      .matches(/^\d+$/, 'Le numéro étudiant doit être composé uniquement de chiffres.'),
    email: yup
      .string()
      .required("L'email est obligatoire.")
      .email("L'email doit être une adresse email valide.")
      .matches(/@etu\.toulouse-inp\.fr$/, "L'email doit se terminer par @etu.toulouse-inp.fr"),
    phone: yup
      .string()
      .required('Le numéro de téléphone est obligatoire.')
      .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, 'Le numéro de téléphone doit être un numéro valide.'),
    password: yup
      .string()
      .required('Le mot de passe est obligatoire.')
      .min(8, 'Le mot de passe doit contenir au moins 8 caractères.')
      .matches(/[a-z]/, 'Le mot de passe doit contenir au moins une minuscule.')
      .matches(/[A-Z]/, 'Le mot de passe doit contenir au moins une majuscule.')
      .matches(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre.')
      .matches(/[^a-zA-Z0-9]/, 'Le mot de passe doit contenir au moins un caractère spécial.'),
    passwordConfirmation: yup
      .string()
      .required('La confirmation du mot de passe est obligatoire.')
      .oneOf([yup.ref('password')], 'Les mots de passe doivent correspondre.'),
    termsAccepted: yup.bool().oneOf([true], 'Vous devez accepter les termes et conditions.'),
  })
  .required();

interface FormRegisterData {
  firstname: string;
  lastname: string;
  studentNumber: string;
  email: string;
  phone: string;
  password: string;
  passwordConfirmation: string;
  termsAccepted?: boolean;
}

// TODO: Ajouter la possibilité de voir son mot de passe avec une icone clickable
// TODO: Revoir le design des inputs (le texte à l'intérieur est bizarre)
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormRegisterData) => {
    try {
      // const response = await axios.post(`${API_URL}/auth/local/register`, data);
      console.log(data);
      // TODO: Envoyer la requête register()
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            Numéro étudiant <span className="text-rose-500">*</span>
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
            type="email"
            autoComplete="email"
            {...register('email')}
          />

          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">
            Numéro de téléphone <span className="text-rose-500">*</span>
          </label>

          <input
            id="phone"
            className="form-input py-2 w-full"
            type="tel"
            autoComplete="tel"
            {...register('phone')}
          />

          {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Mot de passe <span className="text-rose-500">*</span>
          </label>

          <input
            id="password"
            className="form-input py-2 w-full"
            type="password"
            autoComplete="new-password"
            {...register('password')}
          />

          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="passwordConfirmation">
            Confirmation du mot de passe <span className="text-rose-500">*</span>
          </label>

          <input
            id="passwordConfirmation"
            className="form-input py-2 w-full"
            type="password"
            autoComplete="new-password"
            {...register('passwordConfirmation')}
          />

          {errors.passwordConfirmation && (
            <p className="text-sm text-red-500 mt-1">{errors.passwordConfirmation.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <button className="btn-sm w-full text-sm text-white bg-blue-600 hover:bg-blue-700 group">
          Rejoindre Greensa’table{' '}
          <span className="tracking-normal text-white-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
            -&gt;
          </span>
        </button>
      </div>

      <div className="mt-5">
        <label className="flex items-start">
          <input type="checkbox" className="form-checkbox mt-0.5" {...register('termsAccepted')} />

          <div className="flex flex-col ml-3">
            <span className="text-sm text-slate-500">
              En cliquant sur Rejoindre Greensa’table, vous acceptez nos{' '}
              <Link
                className="text-blue-600 hover:underline"
                href="terms-of-use"
                aria-label="Conditions d'utilisation"
              >
                Conditions d&apos;utilisation
              </Link>{' '}
              et notre{' '}
              <Link
                className="text-blue-600 hover:underline"
                href="privacy-policy"
                aria-label="Politique de confidentialité"
              >
                Politique de confidentialité
              </Link>
              .
            </span>

            {errors.termsAccepted && (
              <p className="text-sm text-red-500 mt-1">{errors.termsAccepted.message}</p>
            )}
          </div>
        </label>
      </div>

      <div className="text-center mt-5">
        <span className="text-sm text-slate-500">
          Vous avez déjà un compte ?{' '}
          <Link className="text-blue-600 hover:underline" href="/login" aria-label="Se connecter">
            Se connecter
          </Link>
        </span>
      </div>
    </form>
  );
};

export default Form;
