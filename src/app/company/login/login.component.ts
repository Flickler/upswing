import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'upswing-company-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgOptimizedImage, LucideIcons],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formLogin: FormGroup;
  isPassVisible = false;

  VisibilityToggle() {
    this.isPassVisible = !this.isPassVisible;
  }

  constructor() {
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl(''),
    });
  }
}
