import { environment } from '@@Environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl;

  recoverPassword(email: string) {
    return this.http.post<{ token: string }>(
      this.path + '/recover-password',
      null,
      { params: { email: email } }
    );
  }

  setNewPassword(password: string, token: string) {
    return this.http.patch<void>(this.path + '/recover-password/' + token, {
      newPassword: password,
    });
  }
}
