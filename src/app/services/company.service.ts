import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, of, take } from 'rxjs';

import { environment } from '@@Environments/environment';
import { CompanyComponent } from '@@Company/company.component';
import { DecodedToken, LoginForm, TokenResponse } from '@@Types/Login';
import { Company, RegisterCompany } from '@@Types/Company';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: CompanyComponent,
})
export class CompanyService {
  private readonly path = environment.apiUrl;
  private http = inject(HttpClient);
  private router = inject(Router);
  private token = signal<TokenResponse | null>(null);
  private decodedToken = computed<DecodedToken | null>(() => {
    return this.token() ? jwtDecode(this.token()!.token) : null;
  });

  constructor() {
    const token = localStorage.getItem('company-acess-token');
    if (token) this.token.set(JSON.parse(token));
  }

  login(form: LoginForm) {
    return this.http
      .post<TokenResponse>(this.path + '/login/company', form)
      .pipe(
        take(1),
        catchError(() => of(null))
      )
      .subscribe((res) => {
        if (res) {
          this.setToken({ token: res.token });
          localStorage.setItem(
            'company-acess-token',
            JSON.stringify(this.token())
          );
          this.router.navigateByUrl('co');
        }
      });
  }

  logout() {
    this.token.set(null);
    localStorage.removeItem('company-acess-token');
    this.router.navigateByUrl('');
  }

  setToken(value: TokenResponse) {
    this.token.set(value);
  }

  getUser() {
    return this.http.get<Company>(
      this.path + '/list/company/' + this.decodedToken()!.sub
    );
  }

  getUserId() {
    return this.decodedToken()!.sub;
  }

  registerCompany(form: RegisterCompany) {
    return this.http.post<RegisterCompany>(
      this.path + '/register/company',
      form
    );
  }
}
