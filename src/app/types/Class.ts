export type Class = {
  id: string;
  code: number;
  courseId: string;
  mode: string;
  shift: string;
  startDate: string;
  closingDate: string;
  vacancyNumber: number;
  active?: boolean;
};

export type RegisterClass = Partial<{
  courseId: string;
  mode: string;
  shift: string;
  startDate: string;
  closingDate: string;
  vacancyNumber: number | null;
}>;
