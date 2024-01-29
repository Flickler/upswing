import { ZipCode } from './ZipCode';

export type Address = {
  id: string;
  number: number;
  complement: string;
  zipCode: ZipCode;
};
