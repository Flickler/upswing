import { Component, Input, inject } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { Admin } from '@@Types/Admin';
import { PhonePipe } from '@@Pipes/phone-number.pipe';

@Component({
  selector: 'dashboard-sidebar',
  standalone: true,
  imports: [NgClass, PhonePipe, LucideIcons, NgOptimizedImage],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.scss',
})
export class DashboardSidebarComponent {
  private dashboardService = inject(AdminDashboardService);
  protected panel = this.dashboardService.getPanel();
  @Input() user: Admin | null = null;
}
