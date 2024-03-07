import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { JobOffersCardsContentPipe } from '@@Pipes/get-job-offers-cards-content.pipe';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { JobOfferCardComponent } from '@@Components/job-offer-card/job-offer-card.component';
import { StatusFilterComponent } from '@@Components/status-filter/status-filter.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { CurrentPagePipe } from '@@Pipes/get-current-page.pipe';
import { LastPagePipe } from '@@Pipes/last-page.pipe';
import { CardLoadingComponent } from '@@Components/card-loading/card-loading.component';
import { NothingCardComponent } from '@@Components/nothing-card/nothing-card.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-job-offer-viewer',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    CurrentPagePipe,
    LastPagePipe,
    JobOffersCardsContentPipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    JobOfferCardComponent,
    StatusFilterComponent,
    PaginationSectionComponent,
    CardLoadingComponent,
    NothingCardComponent,
    LucideIcons,
  ],
  templateUrl: './job-offer-viewer.component.html',
  styleUrl: './job-offer-viewer.component.scss',
})
export class JobOfferViewerComponent {
  private dashboardService = inject(AdminDashboardService);
  protected jobs$ = this.dashboardService.getPendingJobOffers(0);
  protected filter: 'pending' | 'approved' = 'pending';

  getPage(page: number) {
    if (this.filter == 'pending') {
      this.jobs$ = this.dashboardService.getPendingJobOffers(page);
    } else {
      this.jobs$ = this.dashboardService.getApprovedJobOffers(page);
    }
  }

  setFilter(filter: 'pending' | 'approved') {
    this.filter = filter;
    if (this.filter == 'pending') {
      this.jobs$ = this.dashboardService.getPendingJobOffers(0);
    } else {
      this.jobs$ = this.dashboardService.getApprovedJobOffers(0);
    }
  }
}
