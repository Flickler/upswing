export type Account = {
  name: string;
  mainPhone: string;
  optionalPhone?: string;
  email: string;
  activeProfile?: boolean;
};

export type RegisterAccount = Partial<{
  name: string;
  mainPhone: string;
  optionalPhone: string;
  email: string;
  password: string;
  confirmPassword: string;
}>;
