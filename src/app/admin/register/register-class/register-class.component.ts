import { Component, inject } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { take } from 'rxjs';

import { RegisterService } from '@@Services/register.service';
import { SelectService } from '@@Services/select.service';
import { ModalComponent } from '@@Components/modal/modal.component';
import { ToastComponent } from '@@Components/toast/toast.component';
import { ModalNotificationComponent } from '@@Components/modal-notification/modal-notification.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { OptionCourse } from '@@Types/Course';

@Component({
  selector: 'upswing-register-class',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    NgClass,
    ModalComponent,
    ToastComponent,
    ModalNotificationComponent,
    LucideIcons
  ],
  templateUrl: './register-class.component.html',
})
export class RegisterClassComponent {
  private fb = inject(NonNullableFormBuilder);
  private registerService = inject(RegisterService);
  private selectService = inject(SelectService);
  protected courses$ = this.selectService.getCourses();

  protected disable = false;
  protected formStatus: 'notSubmitted' | 'error' | 'sucess' = 'notSubmitted';

  protected form = this.fb.group({
    courseId: ['', Validators.required],
    mode: ['', Validators.required],
    shift: ['', Validators.required],
    startDate: ['', Validators.required],
    closingDate: ['', Validators.required],
    vacancyNumber: new FormControl<number | null>(null, Validators.required),
  });
  submitted = false;
  optionsContainer = false;
  selected = 'Vincule um curso a turma';

  protected get courseId() { return this.form.controls.courseId }
  protected get mode() { return this.form.controls.mode }
  protected get shift() { return this.form.controls.shift }
  protected get startDate() { return this.form.controls.startDate }
  protected get closingDate() { return this.form.controls.closingDate }
  protected get vacancyNumber() { return this.form.controls.vacancyNumber }

  optionsContainerToggle() {
    this.optionsContainer = !this.optionsContainer;
  }

  optionClick(option: OptionCourse) {
    this.selected = option.courseName;
    this.courseId.setValue(option.id);
    this.optionsContainer = false;
  }
  protected onSubmit() {
    this.submitted = true;
    if(this.form.valid){
      this.registerService.registerClass(this.form.value)
        .pipe(take(1))
        .subscribe(res => {
          if(res.id){
            this.submitted = false;
            this.form.reset();
            this.formStatus = 'sucess';
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
