import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, LucideIcons],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {}
