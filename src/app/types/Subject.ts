export type Subject = {
  subjectName: string;
  description: string;
  courseId: string;
};

export type RegisterSubject = Partial<Subject>;
