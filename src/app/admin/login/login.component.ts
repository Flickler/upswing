import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ToastComponent } from '@@Components/toast/toast.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { AdminService } from '@@Services/admin.service';

@Component({
  selector: 'upswing-admin-login',
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
  private adminService = inject(AdminService);
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
      this.adminService.login(this.form.value);
    }
  }
}
