import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '@@Environments/environment';
import { AdminComponent } from '@@Admin/admin.component';
import { DecodedToken, LoginForm, TokenResponse } from '@@Types/Login';
import { jwtDecode } from 'jwt-decode';
import { catchError, of, take } from 'rxjs';
import { Admin } from '@@Types/Admin';

@Injectable({
  providedIn: AdminComponent,
})
export class AdminService {
  private readonly path = environment.apiUrl;
  private http = inject(HttpClient);
  private router = inject(Router);
  private token = signal<TokenResponse | null>(null);
  private decodedToken = computed<DecodedToken | null>(() => {
    return this.token() ? jwtDecode(this.token()!.token) : null;
  });

  constructor() {
    const token = localStorage.getItem('admin-acess-token');
    if (token) this.token.set(JSON.parse(token));
  }

  login(form: LoginForm) {
    return this.http
      .post<TokenResponse>(this.path + '/login/admin', form)
      .pipe(
        take(1),
        catchError(() => of(null))
      )
      .subscribe((res) => {
        if (res) {
          this.setToken({ token: res.token });
          localStorage.setItem(
            'admin-acess-token',
            JSON.stringify(this.token())
          );
          this.router.navigateByUrl('ad');
        }
      });
  }

  logout() {
    this.token.set(null);
    localStorage.removeItem('admin-acess-token');
    this.router.navigateByUrl('');
  }

  setToken(value: TokenResponse) {
    this.token.set(value);
  }

  getUser() {
    return this.http.get<Admin>(
      this.path + '/list/admin/' + this.decodedToken()!.sub
    );
  }
}
