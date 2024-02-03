export type Course = {
  id: string;
  bussinesAreaId: string;
  courseName: string;
  educationLevel: string;
  schedule: number;
  monthlyCost: number;
  totalCost: number;
  active: boolean;
};

export type RegisterCourse = Partial<{
  bussinesAreaId: string;
  courseName: string;
  educationLevel: string;
  schedule: number | null;
  monthlyCost: number | null;
  totalCost: number | null;
}>;