import { Component, inject } from '@angular/core';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { StudentDashboardService } from '@@Services/student-dashboard.service';

@Component({
  selector: 'student-dashboard-header',
  standalone: true,
  imports: [LucideIcons],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class StudentDashboardHeaderComponent {
  private dashboardService = inject(StudentDashboardService);
  protected panel = this.dashboardService.getPanel();
  panelToggle() {
    this.dashboardService.panelToggle();
  }
}
