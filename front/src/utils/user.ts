import { getAllUsers } from '@/services/user';

interface UserAlreadyExistsProps {
  email: string;
}

export const userAlreadyExists = async ({ email }: UserAlreadyExistsProps) => {
  const users = await getAllUsers({
    filters: {
      '[email][$eq]': email,
    },
  });

  return {
    exist: users.length > 0,
    data: users[0],
  };
};
