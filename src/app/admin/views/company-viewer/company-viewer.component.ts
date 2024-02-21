import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { CompaniesCardsContentPipe } from '@@Pipes/get-companies-cards-content.pipe';
import { LastPagePipe } from '@@Pipes/last-page.pipe';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { CompanyCardComponent } from '@@Components/company-card/company-card.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { StatusFilterComponent } from '@@Components/status-filter/status-filter.component';
import { CurrentPagePipe } from '@@Pipes/get-current-page.pipe';
import { NothingCardComponent } from '@@Components/nothing-card/nothing-card.component';

@Component({
  selector: 'upswing-company-viewer',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    CurrentPagePipe,
    LastPagePipe,
    CompaniesCardsContentPipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    CompanyCardComponent,
    StatusFilterComponent,
    PaginationSectionComponent,
    NothingCardComponent,
    LucideIcons,
  ],
  templateUrl: './company-viewer.component.html',
  styleUrl: './company-viewer.component.scss',
})
export class CompanyViewerComponent {
  private dashboardService = inject(AdminDashboardService);
  protected companies$ = this.dashboardService.getPedingCompanies(0);
  protected filter: 'pending' | 'approved' = 'pending';

  getPage(page: number) {
    if (this.filter == 'pending') {
      this.companies$ = this.dashboardService.getPedingCompanies(page);
    } else {
      this.companies$ = this.dashboardService.getApprovedCompanies(page);
    }
  }

  setFilter(type: 'pending' | 'approved') {
    this.filter = type;
    if (this.filter == 'pending') {
      this.companies$ = this.dashboardService.getPedingCompanies(0);
    } else {
      this.companies$ = this.dashboardService.getApprovedCompanies(0);
    }
  }
}
