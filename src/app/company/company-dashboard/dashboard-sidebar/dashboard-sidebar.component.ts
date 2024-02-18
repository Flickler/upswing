import { Component, Input, inject } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { CompanyDashboardService } from '@@Services/company-dashboard.service';
import { Company } from '@@Types/Company';
import { PhonePipe } from '@@Pipes/phone-number.pipe';

@Component({
  selector: 'company-dashboard-sidebar',
  standalone: true,
  imports: [NgClass, PhonePipe, LucideIcons, NgOptimizedImage],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.scss',
})
export class CompanyDashboardSidebarComponent {
  private dashboardService = inject(CompanyDashboardService);
  panel = this.dashboardService.getPanel();
  @Input() user: Company | null = null;
}
