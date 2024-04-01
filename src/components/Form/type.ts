export type PasswordInputs = {
  password: string;
};

export type SinginInputs = PasswordInputs & {
  email: string;
};
export type SingupInputs = SinginInputs & {
  nickname: string;
};

export type NewPasswordInputs = {
  password: string;
  new_password: string;
};
