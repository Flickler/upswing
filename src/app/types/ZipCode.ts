export type ZipCode = {
  zipCode: string;
  street: string;
  area: string;
  city: string;
  state: string;
};

export type RegisterZipeCode = Partial<ZipCode>;
