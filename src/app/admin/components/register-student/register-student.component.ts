import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgxMaskDirective } from 'ngx-mask';
// import { RegisterService } from '@@Services/register.service';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

@Component({
  selector: 'app-register-student',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective, RegisterModalComponent],
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

  onSubmit() {
    if (this.form.valid) {
      // this.registerService.registerStudent(this.form.value);
    }
  }
}
