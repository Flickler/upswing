import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { RouterLink } from '@angular/router';
import { ToastComponent } from '@@Components/toast/toast.component';
import { CompanyService } from '@@Services/company.service';

@Component({
  selector: 'upswing-company-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgOptimizedImage,
    ToastComponent,
    LucideIcons,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(NonNullableFormBuilder);
  private companyService = inject(CompanyService);
  protected form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  protected isPassVisible = false;
  protected submitted = false;
  protected failedToLogin = false;

  get email() {
    return this.form.controls.email;
  }
  get password() {
    return this.form.controls.password;
  }

  VisibilityToggle() {
    this.isPassVisible = !this.isPassVisible;
  }

  protected onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.companyService.login(this.form.value);
    }
  }
}
