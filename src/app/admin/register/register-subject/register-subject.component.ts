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
import { ModalNotificationComponent } from '@@Components/modal-notification/modal-notification.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-register-subject',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    CustomSelectCoursesComponent,
    ModalComponent,
    ToastComponent,
    ModalNotificationComponent,
    LucideIcons,
  ],
  templateUrl: './register-subject.component.html',
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
  protected disable = false;
  protected formStatus: 'notSubmitted' | 'error' | 'success' = 'notSubmitted';

  protected get subjectName() {
    return this.form.controls.subjectName;
  }
  protected get description() {
    return this.form.controls.description;
  }
  protected get courseId() {
    return this.form.controls.courseId;
  }

  protected onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.disable = true;
      this.registerService
        .registerSubject(this.form.value)
        .pipe(take(1))
        .subscribe((res) => {
          if (res.courseId) {
            this.submitted = false;
            this.form.reset();
            this.formStatus = 'success';
            this.disable = false;
          } else {
            this.submitted = false;
            this.formStatus = 'error';
            this.disable = false;
          }
        });
    }
  }
}
