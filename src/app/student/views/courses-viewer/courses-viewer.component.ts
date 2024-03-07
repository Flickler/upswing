import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { StudentDashboardService } from '@@Services/student-dashboard.service';
import { CurrentPagePipe } from '@@Pipes/get-current-page.pipe';
import { LastPagePipe } from '@@Pipes/last-page.pipe';
import { StudentCoursesCardsContentPipe } from '@@Pipes/get-student-courses-cards-content.pipe';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { MyCourseCardComponent } from '@@Components/my-course-card/my-course-card.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { CardLoadingComponent } from '@@Components/card-loading/card-loading.component';
import { NothingCardComponent } from '@@Components/nothing-card/nothing-card.component';

@Component({
  selector: 'upswing-courses-viewer',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrentPagePipe,
    LastPagePipe,
    StudentCoursesCardsContentPipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    MyCourseCardComponent,
    PaginationSectionComponent,
    CardLoadingComponent,
    NothingCardComponent,
  ],
  templateUrl: './courses-viewer.component.html',
  styleUrl: './courses-viewer.component.scss',
})
export class CoursesViewerComponent {
  dashboardService = inject(StudentDashboardService);
  myCourses$ = this.dashboardService.getMyCourses(0);

  getPage(page: number) {
    this.myCourses$ = this.dashboardService.getMyCourses(page);
  }
}
