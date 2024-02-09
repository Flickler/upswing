import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { take } from 'rxjs';
import { NgxMaskDirective } from 'ngx-mask';

import { MatchDirective } from '@@Directives/match.directive';
import { ModalComponent } from '@@Components/modal/modal.component';
import { ToastComponent } from '@@Components/toast/toast.component';
import { RegisterService } from '@@Services/register.service';

@Component({
  selector: 'upswing-register-admin',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective,
    ModalComponent,
    ToastComponent,
  ],
  templateUrl: './register-admin.component.html',
})
export class RegisterAdminComponent {
  private fb = inject(NonNullableFormBuilder);
  private registerService = inject(RegisterService);
  protected form = this.fb.group({
    position: ['', Validators.required],
    account: this.fb.group({
      name: ['', [Validators.required]],
      mainPhone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      optionalPhone: ['', [Validators.nullValidator, Validators.minLength(11), Validators.maxLength(11)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), MatchDirective.match('password')]],
    }),
  });
  protected submitted = false;

  protected get position() { return this.form.controls.position }
  protected get name() { return this.form.controls.account.controls.name };
  protected get mainPhone() { return this.form.controls.account.controls.mainPhone };
  protected get optionalPhone() { return this.form.controls.account.controls.optionalPhone };
  protected get email() { return this.form.controls.account.controls.email };
  protected get password() { return this.form.controls.account.controls.password };
  protected get confirmPassword() { return this.form.controls.account.controls.confirmPassword };

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.confirmPassword.disable();
      if (this.optionalPhone.value == '') this.optionalPhone.disable();
      this.registerService.registerAdmin(this.form.value)
        .pipe(take(1))
        .subscribe(res => {
          this.submitted = false;
          this.confirmPassword.enable();
          this.optionalPhone.enable();
          this.form.reset();
          console.log(res);
        });
    }
  }
}
