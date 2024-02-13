import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { catchError, of, take } from 'rxjs';
import { NgxMaskDirective } from 'ngx-mask';

import { MatchDirective } from '@@Directives/match.directive';
import { ModalComponent } from '@@Components/modal/modal.component';
import { ToastComponent } from '@@Components/toast/toast.component';
import { RegisterService } from '@@Services/register.service';
import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-register-admin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective,
    ModalComponent,
    ToastComponent,
    PopupModalComponent,
    LucideIcons,
  ],
  templateUrl: './register-admin.component.html',
})
export class RegisterAdminComponent {
  private fb = inject(NonNullableFormBuilder);
  private registerService = inject(RegisterService);
  protected formStatus: 'notSubmitted' | 'error' | 'success' = 'notSubmitted';
  protected disable = false;

  protected form = this.fb.group({
    position: ['', Validators.required],
    account: this.fb.group({
      name: ['', [Validators.required]],
      mainPhone: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      optionalPhone: [
        '',
        [
          Validators.nullValidator,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      email: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          MatchDirective.match('password'),
        ],
      ],
    }),
  });
  protected submitted = false;

  protected get position() { return this.form.controls.position }
  protected get name() { return this.form.controls.account.controls.name }
  protected get mainPhone() { return this.form.controls.account.controls.mainPhone }
  protected get optionalPhone() { return this.form.controls.account.controls.optionalPhone }
  protected get email() { return this.form.controls.account.controls.email }
  protected get password() { return this.form.controls.account.controls.password }
  protected get confirmPassword() { return this.form.controls.account.controls.confirmPassword }

  protected onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.disable = true;
      this.confirmPassword.disable();
      if (this.optionalPhone.value == '') this.optionalPhone.disable();
      this.registerService
        .registerAdmin(this.form.value)
        .pipe(
          take(1),
          catchError(() => {
            this.submitted = false;
            this.confirmPassword.enable();
            this.optionalPhone.enable();
            this.formStatus = 'error';
            this.disable = false;
            return of(null);
          })
        )
        .subscribe((res) => {
          if (res) {
            this.submitted = false;
            this.confirmPassword.enable();
            this.optionalPhone.enable();
            this.form.reset();
            this.formStatus = 'success';
            this.disable = false;
          }
        });
    }
  }
}
