import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { catchError, of, take } from 'rxjs';

import { ToastComponent } from '@@Components/toast/toast.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { AdminService } from '@@Services/admin.service';
import { jwtDecode } from 'jwt-decode';

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


  get email() { return this.form.controls.email }
  get password() { return this.form.controls.password }

  VisibilityToggle() {
    this.isPassVisible = !this.isPassVisible;
  }

  protected onSubmit() {
    this.submitted = true;
    console.log(this.adminService.getToken());
    if(this.form.valid){
      this.adminService.login(this.form.value)
      .pipe(
        take(1),
        catchError(() => of(null))
        )
        .subscribe((res) => this.adminService.setToken(jwtDecode(res!.token)));
      }
    console.log(this.adminService.getToken());
  }
}
