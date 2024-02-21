import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@@Environments/environment';
import { AdminDashboardComponent } from '@@Admin/admin-dashboard/admin-dashboard.component';
import { CoursesCards } from '@@Types/Course';
import { Pagination } from '@@Types/Pagination';
import { ClassesCards } from '@@Types/Class';
import { StudentsCards } from '@@Types/Student';
import { JobOfferCard, JobOffersCards } from '@@Types/JobOffer';
import { CompaniesCards } from '@@Types/Company';

@Injectable({
  providedIn: AdminDashboardComponent,
})
export class AdminDashboardService {
  private http = inject(HttpClient);
  private readonly pathAdmin = environment.apiUrl + '/list/admin';
  private readonly path = environment.apiUrl;
  protected isPanelActive = signal(true);

  getPanel() {
    return this.isPanelActive.asReadonly();
  }

  panelToggle() {
    this.isPanelActive.update((curr) => !curr);
  }

  getCourses(page: number) {
    return this.http.get<Pagination<CoursesCards>>(
      this.pathAdmin + '/courses',
      {
        params: { page: page },
      }
    );
  }

  getClasses(page: number) {
    return this.http.get<Pagination<ClassesCards>>(
      this.pathAdmin + '/classes',
      {
        params: { page: page },
      }
    );
  }

  getStudents(page: number) {
    return this.http.get<Pagination<StudentsCards>>(
      this.pathAdmin + '/students',
      {
        params: { page: page },
      }
    );
  }

  getPendingJobOffers(page: number) {
    return this.http.get<Pagination<JobOffersCards>>(
      this.pathAdmin + '/job-offer-pending',
      {
        params: { page: page },
      }
    );
  }

  getApprovedJobOffers(page: number) {
    return this.http.get<Pagination<JobOffersCards>>(
      this.pathAdmin + '/job-offer-approved',
      {
        params: { page: page },
      }
    );
  }

  getPedingCompanies(page: number) {
    return this.http.get<Pagination<CompaniesCards>>(
      this.pathAdmin + '/company-pending',
      {
        params: { page: page },
      }
    );
  }

  getApprovedCompanies(page: number) {
    return this.http.get<Pagination<CompaniesCards>>(
      this.pathAdmin + '/company-approved',
      {
        params: { page: page },
      }
    );
  }

  approvedJob(id: string) {
    return this.http.patch<JobOfferCard>(
      this.path + '/alter/job-approved/' + id,
      null
    );
  }

  notApprovedJob(id: string) {
    return this.http.patch<JobOfferCard>(
      this.path + '/alter/job-not-approved/' + id,
      null
    );
  }

  approvedCompany(id: string) {
    return this.http.patch<JobOfferCard>(
      this.path + '/alter/company-approved/' + id,
      null
    );
  }

  notApprovedCompany(id: string) {
    return this.http.patch<JobOfferCard>(
      this.path + '/alter/company-not-approved/' + id,
      null
    );
  }
}
