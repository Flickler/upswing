import { Component, inject } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { RegisterService } from '@@Services/register.service';
import { SelectService } from '@@Services/select.service';
import { ModalComponent } from '@@Components/modal/modal.component';
import { ToastComponent } from '@@Components/toast/toast.component';
import { BusinessArea } from '@@Types/BussinesArea';
import { take } from 'rxjs';

@Component({
  selector: 'upswing-register-course',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, NgClass, ModalComponent, ToastComponent],
  templateUrl: './register-course.component.html',
})
export class RegisterCourseComponent {
  private fb = inject(NonNullableFormBuilder);
  private registerService = inject(RegisterService);
  private selectService = inject(SelectService);
  protected businessAreas$ = this.selectService.getBussinesArea();
  protected form = this.fb.group({
    courseName: ['', Validators.required],
    businessAreaId: ['', Validators.required],
    educationalLevel: ['', Validators.required],
    schedule: new FormControl<number | null>(null, Validators.required),
    monthlyCost: new FormControl<number | null>(null, Validators.required),
    totalCost: new FormControl<number | null>(null, Validators.required),
  })
  submitted = false;
  selected = 'selecione uma categoria';
  optionsContainer = false;

  protected get courseName() { return this.form.controls.courseName }
  protected get businessAreaId() { return this.form.controls.businessAreaId }
  protected get educationalLevel() { return this.form.controls.educationalLevel }
  protected get schedule() { return this.form.controls.schedule }
  protected get monthlyCost() { return this.form.controls.monthlyCost }
  protected get totalCost() { return this.form.controls.totalCost }


  optionClick(option: BusinessArea) {
    this.selected = option.businessArea;
    this.businessAreaId.setValue(option.id);
    this.optionsContainer = false;
  }

  optionsContainerToggle() {
    this.optionsContainer = !this.optionsContainer;
  }

  protected onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.registerService.registerCourse(this.form.value)
        .pipe(take(1))
        .subscribe(res => console.log(res));
    }
  }
}
