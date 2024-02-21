import { RegisterAccount } from './Account';
import { Address, RegisterAddress } from './Address';
import { SocialNetWorks } from './SocialNetworks';

export type Company = {
  id: string;
  name: string;
  socialNetworks: SocialNetWorks;
  mainPhone: string;
  email: string;
  companyCode: string;
  address: Address;
};

export type RegisterCompany = Partial<{
  companyName: string;
  companyCode: string;
  businessArea: { id: string } | null;
  description: string;
  website: string;
  socialNetworks: SocialNetWorks;
  account: RegisterAccount;
  address: RegisterAddress;
}>;

export type CompanyCard = {
  id: string;
  name: string;
  socialNetworks: SocialNetWorks | null;
  mainPhone: string;
  email: string;
  companyCode: string;
  address: Address;
};

export type CompaniesCards = CompanyCard[];
