import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { StudentDashboardService } from '@@Services/student-dashboard.service';
import { CurrentPagePipe } from '@@Pipes/get-current-page.pipe';
import { LastPagePipe } from '@@Pipes/last-page.pipe';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { MyAppliesCardComponent } from '@@Components/my-applies-card/my-applies-card.component';
import { CardLoadingComponent } from '@@Components/card-loading/card-loading.component';
import { NothingCardComponent } from '@@Components/nothing-card/nothing-card.component';

@Component({
  selector: 'upswing-job-offers-viewer',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrentPagePipe,
    LastPagePipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    MyAppliesCardComponent,
    PaginationSectionComponent,
    CardLoadingComponent,
    NothingCardComponent,
  ],
  templateUrl: './job-offers-viewer.component.html',
  styleUrl: './job-offers-viewer.component.scss',
})
export class JobOffersViewerComponent {
  dashboardService = inject(StudentDashboardService);
  myJobOffers$ = this.dashboardService.getMyJobOffers(0);

  getPage(page: number) {
    this.myJobOffers$ = this.dashboardService.getMyJobOffers(page);
  }
}
