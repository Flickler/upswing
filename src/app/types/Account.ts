export type Account = {
  name: string;
  mainPhone: string;
  optionalPhone?: string;
  mail: string;
  activeProfile?: boolean;
};

export type RegisterAccount = Partial<{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  mainPhone: string;
  optionalPhone: string | null;
}>;
