import { Account, RegisterAccount } from './Account';
import { Address, RegisterAddress } from './Address';
import { BusinessArea } from './BussinesArea';
import { SocialNetWorks } from './SocialNetworks';

export type Company = {
  id: string;
  companyName: string;
  companyCode: string;
  account: Account;
  businessArea: BusinessArea;
  description: string;
  address: Address;
  website: string;
  socialNetworks: SocialNetWorks;
  status: unknown;
};

export type RegisterCompany = Partial<{
  companyName: string;
  companyCode: string;
  businessArea: BusinessArea;
  description: string;
  website: string;
  socialNetworks: SocialNetWorks;
  account: RegisterAccount;
  address: RegisterAddress;
}>;

export type CompanyCard = {
  name: string;
  socialNetworks: SocialNetWorks | null;
  mainPhone: string;
  email: string;
  companyCode: string;
  address: Address;
};

export type CompaniesCards = CompanyCard[];
