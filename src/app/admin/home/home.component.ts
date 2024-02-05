import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { AdminDashboardService } from '@@Services/admin-dashboard.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterLink, NgClass, LucideIcons],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  dashboardService = inject(AdminDashboardService);
  panel = this.dashboardService.getPanel();
}
