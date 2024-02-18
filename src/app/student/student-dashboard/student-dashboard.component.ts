import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';

import { StudentDashboardService } from '@@Services/student-dashboard.service';
import { StudentDashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { StudentDashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { StudentDashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { StudentService } from '@@Services/student.service';

@Component({
  selector: 'student-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    AsyncPipe,
    StudentDashboardHeaderComponent,
    StudentDashboardSidebarComponent,
    StudentDashboardMainComponent,
  ],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss',
  providers: [StudentDashboardService],
})
export class StudentDashboardComponent {
  private studentService = inject(StudentService);
  private dashboardService = inject(StudentDashboardService);
  panel = this.dashboardService.getPanel();
  user$ = this.studentService.getUser();
}
