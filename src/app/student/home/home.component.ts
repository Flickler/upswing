import { Component, inject } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

import { StudentService } from '@@Services/student.service';
import { StudentDashboardService } from '@@Services/student-dashboard.service';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'student-home',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgClass, LucideIcons],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private studentService = inject(StudentService);
  private dashboardService = inject(StudentDashboardService);
  protected panel = this.dashboardService.getPanel();
  protected studentName = this.studentService.getUser();
}
