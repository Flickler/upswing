import { Injectable, inject, signal } from '@angular/core';

import { StudentDashboardComponent } from '@@Student/student-dashboard/student-dashboard.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '@@Environments/environment';
import { StudentService } from './student.service';
import { Pagination } from '@@Types/Pagination';
import { MyCoursesCards } from '@@Types/Course';
import { JobOffersCards } from '@@Types/JobOffer';

@Injectable({
  providedIn: StudentDashboardComponent,
})
export class StudentDashboardService {
  private readonly path = environment.apiUrl;
  private http = inject(HttpClient);
  private studentService = inject(StudentService);
  private readonly userId = this.studentService.getUserId();
  isPanelActive = signal(true);

  getPanel() {
    return this.isPanelActive.asReadonly();
  }

  panelToggle() {
    this.isPanelActive.update((curr) => !curr);
  }

  getMyJobOffers(page: number) {
    return this.http.get<Pagination<JobOffersCards>>(
      this.path + '/list/student/my-job-offers/' + this.userId,
      { params: { page: page } }
    );
  }

  getMyCourses(page: number) {
    return this.http.get<Pagination<MyCoursesCards>>(
      this.path + '/list/student/my-course/' + this.userId,
      {
        params: { page: page },
      }
    );
  }

  hasConfig() {
    return this.http.get<boolean>(
      this.path + '/list/student/auto-apply/' + this.userId
    );
  }
}
