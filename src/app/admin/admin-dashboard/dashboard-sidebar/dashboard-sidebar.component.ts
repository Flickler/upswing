import { Component, inject } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'dashboard-sidebar',
  standalone: true,
  imports: [NgClass, LucideIcons, NgOptimizedImage],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.scss',
})
export class DashboardSidebarComponent {
  private dashboardService = inject(AdminDashboardService);
  protected panel = this.dashboardService.getPanel();
}
