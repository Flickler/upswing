import { Component, inject } from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgxMaskDirective } from 'ngx-mask';

// import { CompanyDashboardService } from '@@Services/company-dashboard.service';
import { ModalComponent } from '@@Components/modal/modal.component';
import { ToastComponent } from '@@Components/toast/toast.component';
import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { CustomSelectCoursesComponent } from '@@Components/custom-select-courses/custom-select-courses.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective,
    ModalComponent,
    ToastComponent,
    CustomSelectCoursesComponent,
    PopupModalComponent,
    LucideIcons,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  private fb = inject(NonNullableFormBuilder);
  // private registerService = inject(CompanyDashboardService);
  protected formStatus: 'notSubmitted' | 'error' | 'success' = 'notSubmitted';
  protected disable = false;

  protected form = this.fb.group({
    position: ['', Validators.required],
    bussinessArea: ['', Validators.required],
    educationLevel: ['', Validators.required],
    journey: ['', Validators.required],
    salary: new FormControl<number | null>(null, Validators.required),
    disablePerson: new FormControl<boolean>(false),
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
    benefitsMobility: new FormControl<boolean>(false),
    benefitsEducation: new FormControl<boolean>(false),
    benefitsHealthWellness: new FormControl<boolean>(false),
    benefitsChildcare: new FormControl<boolean>(false),
    benefitsMeal: new FormControl<boolean>(false),
    benefitsCultural: new FormControl<boolean>(false),
    closingDate: ['', Validators.required],
  });

  protected submitted = false;

  protected get position() { return this.form.controls.position }
  protected get bussinessArea() { return this.form.controls.bussinessArea }
  protected get educationLevel() { return this.form.controls.educationLevel }
  protected get journey() { return this.form.controls.journey }
  protected get salary() { return this.form.controls.salary }
  protected get disablePerson() { return this.form.controls.disablePerson }
  protected get offerQty() { return this.form.controls.offerQty }
  protected get workSchedule() { return this.form.controls.workSchedule }
  protected get offerDescription() { return this.form.controls.offerDescription }
  protected get benefitsMobility() { return this.form.controls.benefitsMobility }
  protected get benefitsEducation() { return this.form.controls.benefitsEducation }
  protected get benefitsHealthWellness() { return this.form.controls.benefitsHealthWellness }
  protected get benefitsChildcare() { return this.form.controls.benefitsChildcare }
  protected get benefitsMeal() { return this.form.controls.benefitsMeal }
  protected get benefitsCultural() { return this.form.controls.benefitsCultural }
  protected get closingDate() { return this.form.controls.closingDate }

  protected onSubmit() {
    this.submitted = true;
    console.log(this.form);
  }
}
