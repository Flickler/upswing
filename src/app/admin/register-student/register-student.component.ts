import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgxMaskDirective } from 'ngx-mask';
// import { RegisterService } from '@@Services/register.service';
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
  private fb = inject(FormBuilder);
  // private registerService = inject(RegisterService);

  protected form = this.fb.nonNullable.group({
    account: this.fb.nonNullable.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
      ],
      mainPhone: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      optionalPhone: ['', [Validators.minLength(11), Validators.maxLength(11)]],
    }),
    birthDate: ['', Validators.required],
    socialSecurity: [
      '',
      [Validators.required, Validators.maxLength(11), Validators.minLength(11)],
    ],
    address: this.fb.nonNullable.group({
      zipCode: [
        '',
        [Validators.required, Validators.maxLength(8), Validators.minLength(8)],
      ],
      number: ['', Validators.required],
      complement: ['', Validators.required],
    }),
  });

  protected get name() {
    return this.form.controls.account.controls.name;
  }

  protected get email() {
    return this.form.controls.account.controls.email;
  }

  protected get password() {
    return this.form.controls.account.controls.password;
  }

  protected get mainPhone() {
    return this.form.controls.account.controls.mainPhone;
  }

  protected get optionalPhone() {
    return this.form.controls.account.controls.optionalPhone;
  }

  protected get socialSecurity() {
    return this.form.controls.socialSecurity;
  }

  protected get birthDate() {
    return this.form.controls.birthDate;
  }

  protected get zipCode() {
    return this.form.controls.address.controls.zipCode;
  }

  protected get number() {
    return this.form.controls.address.controls.number;
  }

  protected get complement() {
    return this.form.controls.address.controls.complement;
  }

  onSubmit() {
    if (this.form.valid) {
      // this.registerService.registerStudent(this.form.value);
    }
  }
}
