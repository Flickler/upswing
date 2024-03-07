import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { CompanyDashboardService } from '@@Services/company-dashboard.service';
import { MyVacancyCardComponent } from '@@Components/my-vacancy-card/my-vacancy-card.component';
import { CardLoadingComponent } from '@@Components/card-loading/card-loading.component';
import { NothingCardComponent } from '@@Components/nothing-card/nothing-card.component';
import { CurrentPagePipe } from '@@Pipes/get-current-page.pipe';
import { LastPagePipe } from '@@Pipes/last-page.pipe';

@Component({
  selector: 'upswing-job-offers-viewer',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrentPagePipe,
    LastPagePipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    MyVacancyCardComponent,
    PaginationSectionComponent,
    CardLoadingComponent,
    NothingCardComponent,
  ],
  templateUrl: './job-offers-viewer.component.html',
  styleUrl: './job-offers-viewer.component.scss',
})
export class JobOffersViewerComponent {
  private dashboardService = inject(CompanyDashboardService);
  protected myVancancies$ = this.dashboardService.getMyVancancies(0);

  getPage(page: number) {
    this.myVancancies$ = this.dashboardService.getMyVancancies(
      page
    );
  }
}
