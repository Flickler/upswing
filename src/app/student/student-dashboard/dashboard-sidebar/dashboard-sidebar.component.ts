import { Component, inject } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { StudentDashboardService } from '@@Services/student-dashboard.service';

@Component({
  selector: 'student-dashboard-sidebar',
  standalone: true,
  imports: [NgClass, LucideIcons, NgOptimizedImage],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrl: './dashboard-sidebar.component.scss',
})
export class StudentDashboardSidebarComponent {
  private dashboardService = inject(StudentDashboardService);
  panel = this.dashboardService.getPanel();
}
