import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, of, take } from 'rxjs';

import { environment } from '@@Environments/environment';
import { StudentComponent } from '@@Student/student.component';
import { Student } from '@@Types/Student';
import { DecodedToken, LoginForm, TokenResponse } from '@@Types/Login';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: StudentComponent,
})
export class StudentService {
  private readonly path = environment.apiUrl;
  private http = inject(HttpClient);
  private router = inject(Router);
  private token = signal<TokenResponse | null>(null);
  private decodedToken = computed<DecodedToken | null>(() => {
    return this.token() ? jwtDecode(this.token()!.token) : null;
  });

  constructor() {
    const token = localStorage.getItem('student-acess-token');
    if (token) this.token.set(JSON.parse(token));
    console.log(this.decodedToken());
  }

  login(form: LoginForm) {
    return this.http
      .post<TokenResponse>(this.path + '/login/student', form)
      .pipe(
        take(1),
        catchError(() => of(null))
      )
      .subscribe((res) => {
        if (res) {
          this.setToken({ token: res.token });
          localStorage.setItem(
            'student-acess-token',
            JSON.stringify(this.token())
          );
          this.router.navigateByUrl('st');
        }
      });
  }

  logout() {
    this.token.set(null);
    localStorage.removeItem('student-acess-token');
    this.router.navigateByUrl('');
  }

  setToken(value: TokenResponse) {
    this.token.set(value);
  }

  getUser() {
    return this.http.get<Student>(
      this.path + '/list/student/' + this.decodedToken()!.sub
    );
  }

  getUserId() {
    return this.decodedToken()!.sub;
  }
}
