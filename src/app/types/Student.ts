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

export type Students = Student[];

export type RegisterStudent = Partial<{
  birthDate: string;
  socialSecurity: string;
  account: RegisterAccount;
  address: RegisterAddress;
}>;

export type StudentCard = {
  name: string;
  classes: {
    code: number;
    courseName: string;
  }[];
  status: boolean;
};

export type StudentsCards = StudentCard[];
