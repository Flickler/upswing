import { environment } from '@@Environments/environment';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  RegisterStudent,
  RegisterStudentToClass,
  Student,
  StudentToClassResponse,
} from '@@Types/Student';
import { Admin, RegisterAdmin } from '@@Types/Admin';
import { Course, RegisterCourse } from '@@Types/Course';
import { Class, RegisterClass } from '@@Types/Class';
import { RegisterSubject, Subject } from '@@Types/Subject';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly path = environment.apiUrl + '/register';
  private http = inject(HttpClient);

  registerStudent(form: RegisterStudent) {
    return this.http.post<Student>(this.path + '/student', form);
  }

  registerAdmin(form: RegisterAdmin) {
    return this.http.post<Admin>(this.path + '/admin', form);
  }

  registerCourse(form: RegisterCourse) {
    return this.http.post<Course>(this.path + '/course', form);
  }

  registerClass(form: RegisterClass) {
    return this.http.post<Class>(this.path + '/class', form);
  }

  registerSubject(form: RegisterSubject) {
    return this.http.post<Subject>(this.path + '/subject', form);
  }

  registerStudentToClass(form: RegisterStudentToClass) {
    return this.http.post<StudentToClassResponse>(
      this.path + '/registration',
      form
    );
  }
}
