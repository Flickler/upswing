import { Component } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'dashboard-sidebar',
  standalone: true,
  imports: [NgClass, LucideIcons, NgOptimizedImage],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.scss',
})
export class CompanyDashboardSidebarComponent {
  // private dashboardService = inject(AdminDashboardService);
  // panel = this.dashboardService.getPanel();
}
