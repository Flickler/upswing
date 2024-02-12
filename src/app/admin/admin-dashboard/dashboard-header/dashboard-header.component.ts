import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'dashboard-header',
  standalone: true,
  imports: [RouterLink, NgClass, LucideIcons],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class DashboardHeaderComponent {
  private dashboardService = inject(AdminDashboardService);
  protected panel = this.dashboardService.getPanel();
  protected settings = false;

  panelToggle() {
    this.dashboardService.panelToggle();
  }
}
