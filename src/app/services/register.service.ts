import { environment } from '@@Environments/environment';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegisterStudent, Student } from '@@Types/Student';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly path = environment.apiUrl + '/register';
  private http = inject(HttpClient);

  registerStudent(form: RegisterStudent) {
    return this.http.post<Student>(this.path + '/student', form);
  }
}
