import { LucideIcons } from '@@Icons/lucide-icons.component';
import { Component } from '@angular/core';

@Component({
  selector: 'student-dashboard-header',
  standalone: true,
  imports: [LucideIcons],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class StudentDashboardHeaderComponent {
  // private dashboardService = inject(AdminDashboardService);
  // protected panel = this.dashboardService.getPanel();
  // panelToggle() {
  //   this.dashboardService.panelToggle();
  // }
}
