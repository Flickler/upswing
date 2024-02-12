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
};

export type JobOffersCards = JobOfferCard[];
