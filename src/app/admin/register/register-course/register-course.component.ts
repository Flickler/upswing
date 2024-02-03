import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ListService } from '@@Services/list.service';
import { ModalComponent } from '@@Components/modal/modal.component';
import { ToastComponent } from '@@Components/toast/toast.component';
import { of } from 'rxjs';

@Component({
  selector: 'upswing-register-course',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, ModalComponent, ToastComponent],
  templateUrl: './register-course.component.html',
})
export class RegisterCourseComponent {
  private fb = inject(NonNullableFormBuilder);
  private listService = inject(ListService);
  protected businessAreas$ = this.listService.listBussinesArea();
  protected form = this.fb.group({
    courseName: ['', [Validators.required,]],
    businessAreaId: ['', [Validators.required]],
    educationLevel: ['', [Validators.required]],
    schedule: new FormControl<number | null>(null, [Validators.required]),
    monthlyCost: new FormControl<number | null>(null, [Validators.required]),
    totalCost: new FormControl<number | null>(null, [Validators.required]),
  })
  submitted = false;

  get courseName() { return this.form.controls.courseName }
  get businessAreaId() { return this.form.controls.businessAreaId }
  get educationLevel() { return this.form.controls.educationLevel }
  get schedule() { return this.form.controls.schedule }
  get monthlyCost() { return this.form.controls.monthlyCost }
  get totalCost() { return this.form.controls.totalCost }

  onSubmit() {
    console.log(this.form);
  }
}
