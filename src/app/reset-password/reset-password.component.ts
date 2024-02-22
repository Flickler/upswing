import { ToastComponent } from '@@Components/toast/toast.component';
import { PasswordService } from '@@Services/password.service';
import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { catchError, of, take } from 'rxjs';

@Component({
  selector: 'upswing-reset-password',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, ToastComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  private fb = inject(NonNullableFormBuilder);
  private passwordService = inject(PasswordService);
  protected form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });
  protected notification: 'none' | 'sucess' | 'error' = 'none';
  protected disable = false;

  private get email() {
    return this.form.controls.email.value;
  }

  onSubmit() {
    if (this.form.valid) {
      this.disable = true;
      this.passwordService
        .recoverPassword(this.email)
        .pipe(
          take(1),
          catchError(() => {
            this.notification = 'error';
            this.disable = false;
            return of(null);
          })
        )
        .subscribe(() => {
          this.notification = 'sucess';
          this.disable = false;
          this.form.reset();
        });
    }
  }
}
