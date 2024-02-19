import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { CompanyDashboardService } from '@@Services/company-dashboard.service';
import { MyVacancyCardComponent } from '@@Components/my-vacancy-card/my-vacancy-card.component';
import { NothingCardComponent } from '@@Components/nothing-card/nothing-card.component';

@Component({
  selector: 'upswing-job-offers-viewer',
  standalone: true,
  imports: [
    AsyncPipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    MyVacancyCardComponent,
    PaginationSectionComponent,
    NothingCardComponent,
  ],
  templateUrl: './job-offers-viewer.component.html',
  styleUrl: './job-offers-viewer.component.scss',
})
export class JobOffersViewerComponent {
  private dashboardService = inject(CompanyDashboardService);
  protected myVancancies$ = this.dashboardService.getMyVancancies();
}
