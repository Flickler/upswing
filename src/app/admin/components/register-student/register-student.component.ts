import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { NgxMaskDirective } from 'ngx-mask';
import { RegisterStudent } from '@@Types/Student';
import { RegisterAccount } from '@@Types/Account';

@Component({
  selector: 'app-register-student',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective, RegisterModalComponent],
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.scss',
})
export class RegisterStudentComponent {
  private fb = inject(FormBuilder);
  protected form = this.fb.nonNullable.group({});

  onSubmit() {
    console.log(this.form.value);
  }
}
