import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgxMaskDirective } from 'ngx-mask';

import { CompanyDashboardService } from '@@Services/company-dashboard.service';
import { ModalComponent } from '@@Components/modal/modal.component';
import { ToastComponent } from '@@Components/toast/toast.component';
import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { CustomSelectCoursesComponent } from '@@Components/custom-select-courses/custom-select-courses.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { CustomSelectBusinessAreasComponent } from '@@Components/custom-select-business-areas/custom-select-business-areas.component';
import { catchError, of, take } from 'rxjs';

@Component({
  selector: 'upswing-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective,
    ModalComponent,
    ToastComponent,
    CustomSelectBusinessAreasComponent,
    CustomSelectCoursesComponent,
    PopupModalComponent,
    LucideIcons,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  private fb = inject(NonNullableFormBuilder);
  private dashboardService = inject(CompanyDashboardService);
  protected formStatus: 'notSubmitted' | 'error' | 'success' = 'notSubmitted';
  protected disable = false;

  protected form = this.fb.group({
    position: ['', Validators.required],
    businessAreaId: ['', Validators.required],
    courses: this.fb.array([
      this.fb.control<{ courseId: string } | null>(null, Validators.required),
    ]),
    educationLevel: ['', Validators.required],
    contract: ['', Validators.required],
    journey: ['', Validators.required],
    salary: new FormControl<number | null>(null, Validators.required),
    disablePerson: [false],
    offerQty: new FormControl<number | null>(null, Validators.required),
    workSchedule: ['', Validators.required],
    offerDescription: [
      '',
      [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(200),
      ],
    ],
    benefitsMobility: [false],
    benefitsEducation: [false],
    benefitsHealthWellness: [false],
    benefitsChildcare: [false],
    benefitsMeal: [false],
    benefitsCultural: [false],
    closingDate: ['', Validators.required],
  });

  protected addCourses() {
    this.courses.push(this.fb.control<{ courseId: string } | null>(null));
  }

  protected removeCourses(index: number) {
    this.courses.removeAt(index);
  }

  protected getCourseByIndex(index: number) {
    return this.courses.get(`${index}`);
  }

  protected submitted = false;

  protected get position() {
    return this.form.controls.position;
  }
  protected get businessAreaId() {
    return this.form.controls.businessAreaId;
  }
  protected get courses() {
    return this.form.controls.courses as FormArray;
  }
  protected get educationLevel() {
    return this.form.controls.educationLevel;
  }
  protected get contract() {
    return this.form.controls.contract;
  }
  protected get journey() {
    return this.form.controls.journey;
  }
  protected get salary() {
    return this.form.controls.salary;
  }
  protected get disablePerson() {
    return this.form.controls.disablePerson;
  }
  protected get offerQty() {
    return this.form.controls.offerQty;
  }
  protected get workSchedule() {
    return this.form.controls.workSchedule;
  }
  protected get offerDescription() {
    return this.form.controls.offerDescription;
  }
  protected get benefitsMobility() {
    return this.form.controls.benefitsMobility;
  }
  protected get benefitsEducation() {
    return this.form.controls.benefitsEducation;
  }
  protected get benefitsHealthWellness() {
    return this.form.controls.benefitsHealthWellness;
  }
  protected get benefitsChildcare() {
    return this.form.controls.benefitsChildcare;
  }
  protected get benefitsMeal() {
    return this.form.controls.benefitsMeal;
  }
  protected get benefitsCultural() {
    return this.form.controls.benefitsCultural;
  }
  protected get closingDate() {
    return this.form.controls.closingDate;
  }

  protected onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form.value);
      this.dashboardService
        .addVacancy(this.form.value)
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
