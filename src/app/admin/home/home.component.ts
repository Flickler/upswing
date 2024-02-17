import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';

import { AdminService } from '@@Services/admin.service';
import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgClass, LucideIcons],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  adminService = inject(AdminService);
  dashboardService = inject(AdminDashboardService);
  panel = this.dashboardService.getPanel();
  userName$ = this.adminService.getUser();
}
