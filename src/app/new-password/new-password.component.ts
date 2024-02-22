import { ToastComponent } from '@@Components/toast/toast.component';
import { MatchDirective } from '@@Directives/match.directive';
import { PasswordService } from '@@Services/password.service';
import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { jwtDecode } from 'jwt-decode';
import { catchError, of, take } from 'rxjs';

@Component({
  selector: 'upswing-new-password',
  standalone: true,
  imports: [ReactiveFormsModule, ToastComponent],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss',
})
export class NewPasswordComponent {
  private fb = inject(NonNullableFormBuilder);
  private passwordService = inject(PasswordService);
  private token = jwtDecode(inject(ActivatedRoute).snapshot.params['token'])
    .sub!;

  protected form = this.fb.group({
    newPassword: ['', Validators.required],
    confirmPassword: [
      '',
      [Validators.required, MatchDirective.match('newPassword')],
    ],
  });
  protected notification: 'none' | 'sucess' | 'error' = 'none';
  protected disable = false;

  private get newPassword() {
    return this.form.controls.newPassword.value;
  }
  protected get confirmPassword() {
    return this.form.controls.confirmPassword;
  }

  onSubmit() {
    if (this.form.valid) {
      this.disable = true;
      this.passwordService
        .setNewPassword(this.newPassword, this.token)
        .pipe(
          take(1),
          catchError(() => {
            this.notification = 'error';
            return of(null);
          })
        )
        .subscribe(() => {
          this.form.controls.newPassword.disable();
          this.form.controls.confirmPassword.disable();
          this.form.reset();
          this.form.disable();
          this.notification = 'sucess';
        });
    }
  }
}
