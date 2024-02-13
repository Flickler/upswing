import { Component, inject } from '@angular/core';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ModalComponent } from '@@Components/modal/modal.component';
import { ToastComponent } from '@@Components/toast/toast.component';
import { MatchDirective } from '@@Directives/match.directive';
import { NgxMaskDirective } from 'ngx-mask';
import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-register-company',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective,
    ModalComponent,
    ToastComponent,
    PopupModalComponent,
    LucideIcons,
  ],
  templateUrl: './register-company.component.html',
})
export class RegisterCompanyComponent {
  private fb = inject(NonNullableFormBuilder);
  protected submitted = false;
  protected disable = false;
  protected formStatus: 'notSubmitted' | 'error' | 'success' = 'notSubmitted';

  protected form = this.fb.group({
    companyName: ['', Validators.required],
    companyCode: [
      '',
      [Validators.required, Validators.minLength(14), Validators.maxLength(14)],
    ],
    businessArea: this.fb.group({
      id: ['', Validators.required],
      bussinesArea: ['', Validators.required],
    }),
    description: ['', Validators.required],
    website: ['', Validators.required],
    socialNetworks: this.fb.group({
      socialOne: this.fb.control('', Validators.nullValidator),
      socialTwo: this.fb.control('', Validators.nullValidator),
      socialThree: this.fb.control('', Validators.nullValidator),
      socialFour: this.fb.control('', Validators.nullValidator),
    }),
    account: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          MatchDirective.match('password'),
        ],
      ],
      mainPhone: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      optionalPhone: new FormControl<string | null>(null, [
        Validators.nullValidator,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),
    }),
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

  get companyName() {
    return this.form.controls.companyName;
  }
  get companyCode() {
    return this.form.controls.companyCode;
  }
  get bussinesAreaId() {
    return this.form.controls.businessArea.controls.id;
  }
  get bussinesAreaName() {
    return this.form.controls.businessArea.controls.bussinesArea;
  }
  get description() {
    return this.form.controls.description;
  }
  get website() {
    return this.form.controls.website;
  }
  get socialOne() {
    return this.form.controls.socialNetworks.controls.socialOne;
  }
  get socialTwo() {
    return this.form.controls.socialNetworks.controls.socialTwo;
  }
  get socialThree() {
    return this.form.controls.socialNetworks.controls.socialThree;
  }
  get socialFour() {
    return this.form.controls.socialNetworks.controls.socialFour;
  }
  get name() {
    return this.form.controls.account.controls.name;
  }
  get email() {
    return this.form.controls.account.controls.email;
  }
  get password() {
    return this.form.controls.account.controls.password;
  }
  get confirmPassword() {
    return this.form.controls.account.controls.confirmPassword;
  }
  get mainPhone() {
    return this.form.controls.account.controls.mainPhone;
  }
  get optionalPhone() {
    return this.form.controls.account.controls.optionalPhone;
  }
  get zipCode() {
    return this.form.controls.address.controls.zipCode.controls.zipCode;
  }
  get street() {
    return this.form.controls.address.controls.zipCode.controls.street;
  }
  get area() {
    return this.form.controls.address.controls.zipCode.controls.area;
  }
  get city() {
    return this.form.controls.address.controls.zipCode.controls.city;
  }
  get state() {
    return this.form.controls.address.controls.zipCode.controls.state;
  }
  get number() {
    return this.form.controls.address.controls.number;
  }
  get complement() {
    return this.form.controls.address.controls.complement;
  }

  // protected onSubmit() {
  //   this.submitted = true;
  //   if (this.form.valid) {
  //     this.confirmPassword.disable();
  //     if (this.optionalPhone.value == '') this.optionalPhone.disable();
  //     console.log(this.form.value);
  //   }
  // }
}
