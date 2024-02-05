import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { take } from 'rxjs';

import { RegisterService } from '@@Services/register.service';
import { ModalComponent } from '@@Components/modal/modal.component';
import { ToastComponent } from '@@Components/toast/toast.component';
import { CustomSelectCoursesComponent } from '@@Components/custom-select-courses/custom-select-courses.component';

@Component({
  selector: 'upswing-register-subject',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, CustomSelectCoursesComponent, ModalComponent, ToastComponent],
  templateUrl: './register-subject.component.html',
  styleUrl: './register-subject.component.scss',
})
export class RegisterSubjectComponent {
  private fb = inject(NonNullableFormBuilder);
  private registerService = inject(RegisterService);
  protected form = this.fb.group({
    subjectName: ['', Validators.required],
    description: ['', Validators.required],
    courseId: ['', Validators.required],
  });
  submitted = false;
  
  protected get subjectName() { return this.form.controls.subjectName }
  protected get description() { return this.form.controls.description }
  protected get courseId() { return this.form.controls.courseId }

  onSubmit() {
    this.submitted = true;
    if(this.form.valid){
      this.registerService.registerSubject(this.form.value)
        .pipe(take(1))
        .subscribe(res => console.log(res));
    }
  }
}
