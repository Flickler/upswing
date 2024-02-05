import { LucideIcons } from '@@Icons/lucide-icons.component';
import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'dashboard-header',
  standalone: true,
  imports: [LucideIcons],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class DashboardHeaderComponent {
  private dashboardService = inject(AdminDashboardService);
  protected panel = this.dashboardService.getPanel();

  panelToggle() {
    this.dashboardService.panelToggle();
  }
}
