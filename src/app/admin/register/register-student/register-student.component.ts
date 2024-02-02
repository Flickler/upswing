import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  NonNullableFormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { take } from 'rxjs';

import { NgxMaskDirective } from 'ngx-mask';
import { RegisterService } from '@@Services/register.service';
import { MatchDirective } from '@@Directives/match.directive';
import { ModalComponent } from '@@Components/modal/modal.component';
import { ToastComponent } from '@@Components/toast/toast.component';

@Component({
  selector: 'app-register-student',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective,
    ModalComponent,
    ToastComponent,
  ],
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.scss',
})
export class RegisterStudentComponent {
  private fb = inject(NonNullableFormBuilder);
  private registerService = inject(RegisterService);
  protected submitted = false;

  protected form = this.fb.group({
    account: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16), MatchDirective.match('password')]],
      mainPhone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      optionalPhone: ['', [Validators.nullValidator, Validators.minLength(11), Validators.maxLength(11)]],
    }),
    birthDate: ['', Validators.required],
    socialSecurity: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
    address: this.fb.group({
      zipCode: this.fb.group({
        zipCode: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
        street: ['', Validators.required],
        area: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
      }),
      number: new FormControl<number | null>(null, Validators.required),
      complement: [''],
    }),
  });

  protected get name() { return this.form.controls.account.controls.name; }
  protected get email() { return this.form.controls.account.controls.email; }
  protected get password() { return this.form.controls.account.controls.password; }
  protected get confirmPassword() { return this.form.controls.account.controls.confirmPassword; }
  protected get mainPhone() { return this.form.controls.account.controls.mainPhone; }
  protected get optionalPhone() { return this.form.controls.account.controls.optionalPhone; }
  protected get birthDate() { return this.form.controls.birthDate; }
  protected get socialSecurity() { return this.form.controls.socialSecurity; }
  protected get zipCode() { return this.form.controls.address.controls.zipCode.controls.zipCode; }
  protected get street() { return this.form.controls.address.controls.zipCode.controls.street; }
  protected get area() { return this.form.controls.address.controls.zipCode.controls.area; }
  protected get city() { return this.form.controls.address.controls.zipCode.controls.city; }
  protected get state() { return this.form.controls.address.controls.zipCode.controls.state; }
  protected get number() { return this.form.controls.address.controls.number; }
  protected get complement() { return this.form.controls.address.controls.complement; }

  protected onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.confirmPassword.disable();
      this.registerService
        .registerStudent(this.form.value)
        .pipe(take(1))
        .subscribe((res) => console.log(res));
    }
  }
}
