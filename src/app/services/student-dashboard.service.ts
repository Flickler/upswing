import { Injectable, inject, signal } from '@angular/core';

import { StudentDashboardComponent } from '@@Student/student-dashboard/student-dashboard.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '@@Environments/environment';
import { StudentService } from './student.service';
import { Pagination } from '@@Types/Pagination';
import { StudentCoursesCards } from '@@Types/Course';

@Injectable({
  providedIn: StudentDashboardComponent,
})
export class StudentDashboardService {
  private readonly path = environment.apiUrl;
  private http = inject(HttpClient);
  private studentService = inject(StudentService);
  private userId = this.studentService.getUserId();
  isPanelActive = signal(true);

  getPanel() {
    return this.isPanelActive.asReadonly();
  }

  panelToggle() {
    this.isPanelActive.update((curr) => !curr);
  }

  getMyCourses() {
    return this.http.get<Pagination<StudentCoursesCards>>(
      this.path + '/list/student/my-courses/' + this.userId
    );
  }
}
