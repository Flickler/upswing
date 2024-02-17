export type LoginForm = Partial<{
  email: string;
  password: string;
}>;

export type TokenResponse = {
  token: string;
};
