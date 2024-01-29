export type Account = {
  name: string;
  mainPhone: string;
  optionalPhone?: string;
  email: string;
  activeProfile?: boolean;
};

export type RegisterAccount = {
  name: string;
  mainPhone: string;
  optionalPhone?: string;
  email: string;
  password: string;
  activeProfile?: boolean;
};
