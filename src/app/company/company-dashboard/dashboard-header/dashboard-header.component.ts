import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';

import { CompanyDashboardService } from '@@Services/company-dashboard.service';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'company-dashboard-header',
  standalone: true,
  imports: [NgClass, LucideIcons],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class CompanyDashboardHeaderComponent {
  private dashboardService = inject(CompanyDashboardService);
  protected panel = this.dashboardService.getPanel();
  protected settings = false;

  panelToggle() {
    this.dashboardService.panelToggle();
  }
}
