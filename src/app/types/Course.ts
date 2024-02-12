export type Course = {
  id: string;
  bussinesAreaId: string;
  courseName: string;
  educationalLevel: string;
  schedule: number;
  monthlyCost: number;
  totalCost: number;
  active: boolean;
};

export type Courses = Course[];

export type CourseCard = {
  courseId: string;
  courseName: string;
  businessArea: string;
  educationLevel: string;
  schedule: string;
  subjects: string[];
};

export type CoursesCards = CourseCard[];

export type RegisterCourse = Partial<{
  bussinesAreaId: string;
  courseName: string;
  educationalLevel: string;
  schedule: number | null;
  monthlyCost: number | null;
  totalCost: number | null;
}>;

export type OptionCourse = {
  courseId: string;
  courseName: string;
};

export type OptionsCourse = OptionCourse[];
