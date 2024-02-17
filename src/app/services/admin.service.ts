import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@@Environments/environment';
import { AdminComponent } from '@@Admin/admin.component';
import { LoginForm, TokenResponse } from '@@Types/Login';

@Injectable({
  providedIn: AdminComponent,
})
export class AdminService {
  private readonly path = environment.apiUrl;
  private http = inject(HttpClient);
  private token = signal<any | null>(null);

  login(form: LoginForm) {
    return this.http.post<TokenResponse>(this.path + '/login/admin', form);
  }

  setToken(value: string) {
    this.token.set(value);
    console.log(this.token());
  }

  getToken() {
    return this.token();
  }
}
