import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { StudentDashboardService } from '@@Services/student-dashboard.service';
import { StudentService } from '@@Services/student.service';

@Component({
  selector: 'student-dashboard-header',
  standalone: true,
  imports: [NgClass, LucideIcons],

  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class StudentDashboardHeaderComponent {
  private StudentService = inject(StudentService);
  private dashboardService = inject(StudentDashboardService);
  protected panel = this.dashboardService.getPanel();
  protected settings = false;

  panelToggle() {
    this.dashboardService.panelToggle();
  }

  logoutClick() {
    this.StudentService.logout();
  }
}
