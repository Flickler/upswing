import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { NgClass } from '@angular/common';
import { AdminService } from '@@Services/admin.service';

@Component({
  selector: 'dashboard-header',
  standalone: true,
  imports: [RouterLink, NgClass, LucideIcons],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class DashboardHeaderComponent {
  private dashboardService = inject(AdminDashboardService);
  private adminService = inject(AdminService);
  protected panel = this.dashboardService.getPanel();
  protected settings = false;

  panelToggle() {
    this.dashboardService.panelToggle();
  }

  logoutClick() {
    this.adminService.logout();
  }
}
