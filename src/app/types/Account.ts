export type Account = {
  name: string;
  mainPhone: string;
  optionalPhone?: string;
  email: string;
  password?: string;
  activeProfile?: boolean;
};
