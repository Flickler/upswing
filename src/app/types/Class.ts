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

export type ClassCard = {
  courseName: string;
  code: number;
  mode: string;
  shift: string;
  vacancyNumber: number;
  startDate: string;
  closingDate: string;
};

export type ClassesCards = ClassCard[];
