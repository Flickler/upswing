import { RegisterAccount } from './Account';
import { Address, RegisterAddress } from './Address';
import { OptionsCourse } from './Course';
import { SocialNetWorks } from './SocialNetworks';

export type Student = {
  id: string;
  name: string;
  occupation: string | null;
  socialNetworks: SocialNetWorks;
  mainPhone: string;
  mail: string;
  address: Address;
};

export type Students = Student[];

export type RegisterStudent = Partial<{
  birthDate: string;
  socialSecurity: string;
  account: RegisterAccount;
  address: RegisterAddress;
}>;

export type StudentCard = {
  name: string;
  classes: {
    code: number;
    courseName: string;
  }[];
  status: boolean;
};

export type StudentsCards = StudentCard[];

export type RegisterStudentToClass = Partial<{
  classId: string;
  emails: string[];
}>;

export type StudentToClassResponse = {
  classId: string;
  registration: number;
  email: string;
}[];

export type StudentCandidate = {
  id: string;
  name: string;
  occupation: string;
  status: string;
  socialNetworks: SocialNetWorks;
  courses: OptionsCourse;
};

export type StudentsCandidates = StudentCandidate[];
