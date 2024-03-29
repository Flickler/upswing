import { Address } from './Address';

export type JobOfferCard = {
  jobOfferId: string;
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

export type ApplyVacancy = {
  jobOfferId: string;
  studentId: string;
};

export type ApplyVacancyResponse = {
  id: string;
  name: string;
  position: string;
  status: boolean;
};
