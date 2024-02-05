import { Admin } from './Admin';
import { Company } from './Company';
import { Student } from './Student';

export type DashboardAdmin = {
  type: 'admin';
  content: Admin;
};

export type DashboardStudent = {
  type: 'student';
  content: Student;
};

export type DashboardCompany = {
  type: 'company';
  content: Company;
};
