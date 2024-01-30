import { Account, RegisterAccount } from './Account';
import { Address, RegisterAddress } from './Address';

export type Student = {
  id: string;
  birthDate: string;
  socialSecurity: string;
  registration?: unknown[];
  account: Account;
  socialNetworks?: unknown[];
  Address: Address;
};

export type RegisterStudent = {
  birthDate: string;
  socialSecurity: string;
  account: RegisterAccount;
  Address: RegisterAddress;
};
