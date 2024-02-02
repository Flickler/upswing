import { RegisterZipeCode, ZipCode } from './ZipCode';

export type Address = {
  id: string;
  number: number;
  complement?: string;
  zipCode: ZipCode;
};

export type RegisterAddress = Partial<{
  number: number | null;
  complement: string | null;
  zipCode: RegisterZipeCode;
}>;
