import { Account } from './Account';

export type Admin = {
  id?: string;
  position: string;
  account: Account;
};

export type Admins = Admin[];
