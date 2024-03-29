import { Component, inject } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { catchError, of, take } from 'rxjs';

import { RegisterService } from '@@Services/register.service';
import { ModalComponent } from '@@Components/modal/modal.component';
import { ToastComponent } from '@@Components/toast/toast.component';
import { CustomSelectBusinessAreasComponent } from '@@Components/custom-select-business-areas/custom-select-business-areas.component';
import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-register-course',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    NgClass,
    ModalComponent,
    ToastComponent,
    PopupModalComponent,
    LucideIcons,
    CustomSelectBusinessAreasComponent,
  ],
  templateUrl: './register-course.component.html',
})
export class RegisterCourseComponent {
  private fb = inject(NonNullableFormBuilder);
  private registerService = inject(RegisterService);

  protected form = this.fb.group({
    courseName: ['', Validators.required],
    businessAreaId: ['', Validators.required],
    educationalLevel: ['', Validators.required],
    schedule: new FormControl<number | null>(null, Validators.required),
    monthlyCost: new FormControl<number | null>(null, Validators.required),
    totalCost: new FormControl<number | null>(null, Validators.required),
  });

  submitted = false;
  protected disable = false;
  protected formStatus: 'notSubmitted' | 'error' | 'success' = 'notSubmitted';

  protected get courseName() {
    return this.form.controls.courseName;
  }
  protected get businessAreaId() {
    return this.form.controls.businessAreaId;
  }
  protected get educationalLevel() {
    return this.form.controls.educationalLevel;
  }
  protected get schedule() {
    return this.form.controls.schedule;
  }
  protected get monthlyCost() {
    return this.form.controls.monthlyCost;
  }
  protected get totalCost() {
    return this.form.controls.totalCost;
  }

  protected onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.registerService
        .registerCourse(this.form.value)
        .pipe(
          take(1),
          catchError(() => {
            this.formStatus = 'error';
            this.submitted = false;
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
