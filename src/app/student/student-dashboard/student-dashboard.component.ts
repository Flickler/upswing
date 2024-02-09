import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

import { StudentDashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { StudentDashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { StudentDashboardMainComponent } from './dashboard-main/dashboard-main.component';

@Component({
  selector: 'student-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    StudentDashboardHeaderComponent,
    StudentDashboardSidebarComponent,
    StudentDashboardMainComponent,
  ],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss',
})
export class StudentDashboardComponent {
  // private dashboardService = inject(StudentDashboardService);
  // panel = this.dashboardService.getPanel();
}
