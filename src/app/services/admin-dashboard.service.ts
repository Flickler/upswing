import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@@Environments/environment';
import { AdminDashboardComponent } from '@@Admin/admin-dashboard/admin-dashboard.component';
import { CoursesCards } from '@@Types/Course';
import { Pagination } from '@@Types/Pagination';
import { ClassesCards } from '@@Types/Class';
import { StudentsCards } from '@@Types/Student';
import { JobOffersCards } from '@@Types/JobOffer';
import { CompaniesCards } from '@@Types/Company';

@Injectable({
  providedIn: AdminDashboardComponent,
})
export class AdminDashboardService {
  private http = inject(HttpClient);
  private path = environment.apiUrl + '/list/admin';
  protected isPanelActive = signal(true);

  getPanel() {
    return this.isPanelActive.asReadonly();
  }

  panelToggle() {
    this.isPanelActive.update((curr) => !curr);
  }

  getCourses(page: number) {
    return this.http.get<Pagination<CoursesCards>>(this.path + '/courses', {
      params: { page: page },
    });
  }

  getClasses(page: number) {
    return this.http.get<Pagination<ClassesCards>>(this.path + '/classes', {
      params: { page: page },
    });
  }

  getStudents(page: number) {
    return this.http.get<Pagination<StudentsCards>>(this.path + '/students', {
      params: { page: page },
    });
  }

  getPendingJobOffers(page: number) {
    return this.http.get<Pagination<JobOffersCards>>(
      this.path + '/job-offer-pending',
      {
        params: { page: page },
      }
    );
  }

  getApprovedJobOffers(page: number) {
    return this.http.get<Pagination<JobOffersCards>>(
      this.path + '/job-offer-approved',
      {
        params: { page: page },
      }
    );
  }

  getPedingCompanies(page: number) {
    return this.http.get<Pagination<CompaniesCards>>(
      this.path + '/company-pending',
      {
        params: { page: page },
      }
    );
  }

  getApprovedCompanies(page: number) {
    return this.http.get<Pagination<CompaniesCards>>(
      this.path + '/company-approved',
      {
        params: { page: page },
      }
    );
  }
}
