import { Component, inject } from '@angular/core';

import { CompanyDashboardService } from '@@Services/company-dashboard.service';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'company-dashboard-header',
  standalone: true,
  imports: [LucideIcons],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class CompanyDashboardHeaderComponent {
  private dashboardService = inject(CompanyDashboardService);
  protected panel = this.dashboardService.getPanel();
  panelToggle() {
    this.dashboardService.panelToggle();
  }
}
