import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { catchError, of, take } from 'rxjs';

import { RegisterService } from '@@Services/register.service';
import { ModalComponent } from '@@Components/modal/modal.component';
import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { CustomSelectClassesComponent } from '@@Components/custom-select-classes/custom-select-classes.component';
import { ToastComponent } from '@@Components/toast/toast.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-register-students-to-class',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ModalComponent,
    ToastComponent,
    CustomSelectClassesComponent,
    PopupModalComponent,
    LucideIcons,
  ],
  templateUrl: './register-students-to-class.component.html',
  styleUrl: './register-students-to-class.component.scss',
})
export class RegisterStudentsToClassComponent {
  private fb = inject(NonNullableFormBuilder);
  private registerService = inject(RegisterService);
  protected form = this.fb.group({
    classId: ['', Validators.required],
    emails: this.fb.array([this.fb.control('', Validators.required)]),
  });
  protected submitted = false;
  protected disable = false;
  protected formStatus: 'notSubmitted' | 'error' | 'success' = 'notSubmitted';

  protected addstudentsEmail() {
    this.emails.push(this.fb.control<string>(''));
  }

  protected removestudentsEmail(index: number) {
    this.emails.removeAt(index);
  }

  protected getCourseByIndex(index: number) {
    return this.emails.get(`${index}`);
  }

  protected get classId() {
    return this.form.controls.classId;
  }
  protected get emails() {
    return this.form.controls.emails;
  }

  protected onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.disable = true;
      this.registerService
        .registerStudentToClass(this.form.value)
        .pipe(
          take(1),
          catchError(() => {
            this.submitted = false;
            this.formStatus = 'error';
            this.disable = false;
            return of(null);
          })
        )
        .subscribe((res) => {
          if (res) {
            this.submitted = false;
            this.form.reset();
            this.formStatus = 'success';
            this.disable = false;
          }
        });
    }
  }
}
