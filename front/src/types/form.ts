export interface FormRegister {
  firstname: string;
  lastname: string;
  studentNumber?: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
  termsAccepted?: boolean;
}

export interface FormLogin {
  email: string;
  password: string;
}

export interface FormForgotPassword {
  email: string;
}

export interface FormResetPassword {
  code: string;
  password: string;
  passwordConfirmation: string;
}

export interface FormUpdateAccount {
  firstname: string;
  lastname: string;
  studentNumber?: string;
  email: string;
  phoneNumber: string;
  password?: string;
  passwordConfirmation?: string;
}
