import { LucideIcons } from '@@Icons/lucide-icons.component';
import { DashboardService } from '@@Services/dashboard.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'dashboard-header',
  standalone: true,
  imports: [LucideIcons],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss'
})
export class DashboardHeaderComponent {
  private dashboardService = inject(DashboardService);
  protected panel = this.dashboardService.getPanel();

  panelToggle() {
    this.dashboardService.panelToggle();
  }
}
