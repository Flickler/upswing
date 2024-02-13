import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  NonNullableFormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { catchError, of, take } from 'rxjs';

import { NgxMaskDirective } from 'ngx-mask';
import { RegisterService } from '@@Services/register.service';
import { ModalComponent } from '@@Components/modal/modal.component';
import { ToastComponent } from '@@Components/toast/toast.component';
import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-register-student',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective,
    ModalComponent,
    ToastComponent,
    PopupModalComponent,
    LucideIcons,
  ],
  templateUrl: './register-student.component.html',
})
export class RegisterStudentComponent {
  private fb = inject(NonNullableFormBuilder);
  private registerService = inject(RegisterService);
  protected submitted = false;
  protected disable = false;
  protected formStatus: 'notSubmitted' | 'error' | 'success' = 'notSubmitted';

  protected form = this.fb.group({
    account: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mainPhone: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      optionalPhone: new FormControl<string | null>('', [
        Validators.nullValidator,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),
    }),
    birthDate: ['', Validators.required],
    socialSecurity: [
      '',
      [Validators.required, Validators.maxLength(11), Validators.minLength(11)],
    ],
    address: this.fb.group({
      zipCode: this.fb.group({
        zipCode: [
          '',
          [
            Validators.required,
            Validators.maxLength(8),
            Validators.minLength(8),
          ],
        ],
        street: ['', Validators.required],
        area: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
      }),
      number: new FormControl<number | null>(null, Validators.required),
      complement: [''],
    }),
  });

  protected get name() {
    return this.form.controls.account.controls.name;
  }
  protected get email() {
    return this.form.controls.account.controls.email;
  }
  protected get mainPhone() {
    return this.form.controls.account.controls.mainPhone;
  }
  protected get optionalPhone() {
    return this.form.controls.account.controls.optionalPhone;
  }
  protected get birthDate() {
    return this.form.controls.birthDate;
  }
  protected get socialSecurity() {
    return this.form.controls.socialSecurity;
  }
  protected get zipCode() {
    return this.form.controls.address.controls.zipCode.controls.zipCode;
  }
  protected get street() {
    return this.form.controls.address.controls.zipCode.controls.street;
  }
  protected get area() {
    return this.form.controls.address.controls.zipCode.controls.area;
  }
  protected get city() {
    return this.form.controls.address.controls.zipCode.controls.city;
  }
  protected get state() {
    return this.form.controls.address.controls.zipCode.controls.state;
  }
  protected get number() {
    return this.form.controls.address.controls.number;
  }
  protected get complement() {
    return this.form.controls.address.controls.complement;
  }

  protected onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.disable = true;
      if (this.optionalPhone.value == '') this.optionalPhone.disable();
      this.registerService
        .registerStudent(this.form.value)
        .pipe(
          take(1),
          catchError(() => {
            this.submitted = false;
            this.formStatus = 'error';
            this.disable = false;
            this.optionalPhone.enable();
            return of(null);
          })
        )
        .subscribe((res) => {
          if (res) {
            this.form.reset();
            this.optionalPhone.enable();
            this.submitted = false;
            this.formStatus = 'success';
            this.disable = false;
          }
        });
    }
  }
}
