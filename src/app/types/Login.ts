export type LoginForm = Partial<{
  email: string;
  password: string;
}>;

export type TokenResponse = {
  token: string;
};

export type DecodedToken = {
  exp: number;
  iss: string;
  sub: string;
};
