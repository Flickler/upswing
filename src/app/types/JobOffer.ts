import { Address } from './Address';

export type JobOfferCard = {
  name: string;
  educationLevel: string;
  position: string;
  contract: string;
  benefitsMealVoucher: boolean;
  benefitsMobility: boolean;
  benefitsCulture: boolean;
  benefitsEducation: boolean;
  benefitsHealthInsurance: boolean;
  offerQty: number;
  salary: number;
  closingDate: string;
  offerDescription: string;
  address?: Address;
};

export type JobOffersCards = JobOfferCard[];

export type RegisterVacancy = Partial<{
  companyId: string;
  position: string;
  bussinessArea: string;
  courses: ({ courseId: string } | null)[];
  educationLevel: string;
  journey: string;
  salary: number | null;
  disablePerson: boolean;
  offerQty: number | null;
  workSchedule: string;
  offerDescription: string;
  benefitsMobility: boolean;
  benefitsEducation: boolean;
  benefitsHealthWellness: boolean;
  benefitsChildcare: boolean;
  benefitsMeal: boolean;
  benefitsCultural: boolean;
  closingDate: string;
}>;
