export type SinginInputs = {
  email: string;
  password: string;
};
export type SingupInputs = SinginInputs & {
  nickname: string;
};

export type PasswordInputs = {
  password: string;
  new_password: string;
};
