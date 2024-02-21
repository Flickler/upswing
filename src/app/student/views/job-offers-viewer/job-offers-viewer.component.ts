import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { StudentDashboardService } from '@@Services/student-dashboard.service';
import { NothingCardComponent } from '@@Components/nothing-card/nothing-card.component';
import { MyAppliesCardComponent } from '@@Components/my-applies-card/my-applies-card.component';
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
    MyAppliesCardComponent,
    PaginationSectionComponent,
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
