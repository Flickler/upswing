import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, LucideIcons],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
