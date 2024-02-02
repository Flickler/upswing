import { Account, RegisterAccount } from './Account';

export type Admin = {
  id?: string;
  position: string;
  account: Account;
};

export type RegisterAdmin = Partial<{
  position: string;
  account: RegisterAccount;
}>;

export type Admins = Admin[];
