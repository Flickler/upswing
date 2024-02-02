import { Account, RegisterAccount } from "./Account";
import { Address, RegisterAddress } from "./Address";
import { BussinesArea } from "./BussinesArea";
import { SocialNetWorks } from "./SocialNetworks";

export type Company = {
  id: string;
  companyName: string;
  companyCode: string;
  account: Account;
  businessArea: BussinesArea;
  description: string;
  address: Address;
  website: string;
  socialNetworks: SocialNetWorks;
  status: unknown;
}

export type RegisterCompany = Partial<{
  companyName: string;
  companyCode: string;
  businessArea: BussinesArea;
  description: string;
  website: string;
  socialNetworks: SocialNetWorks;
  account: RegisterAccount;
  address: RegisterAddress;
}>