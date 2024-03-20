export type SinginInputs = {
  email: string;
  password: string;
};
export type SingupInputs = SinginInputs & {
  nickname: string;
};
