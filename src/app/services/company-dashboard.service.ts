import { Injectable, inject, signal } from '@angular/core';

import { CompanyDashboardComponent } from '@@Company/company-dashboard/company-dashboard.component';
import { HttpClient } from '@angular/common/http';
import { Pagination } from '@@Types/Pagination';
import { JobOffersCards, RegisterVacancy } from '@@Types/JobOffer';
import { environment } from '@@Environments/environment';
import { CompanyService } from './company.service';
import { StudentsCandidates } from '@@Types/Student';

@Injectable({
  providedIn: CompanyDashboardComponent,
})
export class CompanyDashboardService {
  private http = inject(HttpClient);
  private companyService = inject(CompanyService);
  protected isPanelActive = signal(true);
  private readonly path = environment.apiUrl;
  private readonly userId = this.companyService.getUserId();

  getPanel() {
    return this.isPanelActive.asReadonly();
  }

  panelToggle() {
    this.isPanelActive.update((curr) => !curr);
  }

  addVacancy(form: Omit<RegisterVacancy, 'companyId'>) {
    return this.http.post<RegisterVacancy>(this.path + '/register/job-offer', {
      companyId: this.userId,
      ...form,
    });
  }

  getMyVancancies() {
    return this.http.get<Pagination<JobOffersCards>>(
      this.path + '/list/company/my-vacancies/' + this.userId
    );
  }

  getOfferCandidates(idOffer: string, page: number) {
    return this.http.get<Pagination<StudentsCandidates>>(
      this.path + '/list/company/my-candidates/' + idOffer,
      { params: { page: page } }
    );
  }
}
