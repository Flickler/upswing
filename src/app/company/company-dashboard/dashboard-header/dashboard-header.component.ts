import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';

import { CompanyDashboardService } from '@@Services/company-dashboard.service';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { CompanyService } from '@@Services/company.service';

@Component({
  selector: 'company-dashboard-header',
  standalone: true,
  imports: [NgClass, LucideIcons],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class CompanyDashboardHeaderComponent {
  private companyService = inject(CompanyService);
  private dashboardService = inject(CompanyDashboardService);
  protected panel = this.dashboardService.getPanel();
  protected settings = false;

  panelToggle() {
    this.dashboardService.panelToggle();
  }

  onClick() {
    this.companyService.logout();
  }
}
