import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { StudentDashboardService } from '@@Services/student-dashboard.service';
import { StudentCoursesCardsContentPipe } from '@@Pipes/get-student-courses-cards-content.pipe';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { MyCourseCardComponent } from '@@Components/my-course-card/my-course-card.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { NothingCardComponent } from '@@Components/nothing-card/nothing-card.component';

@Component({
  selector: 'upswing-courses-viewer',
  standalone: true,
  imports: [
    AsyncPipe,
    StudentCoursesCardsContentPipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    MyCourseCardComponent,
    PaginationSectionComponent,
    NothingCardComponent,
  ],
  templateUrl: './courses-viewer.component.html',
  styleUrl: './courses-viewer.component.scss',
})
export class CoursesViewerComponent {
  dashboardService = inject(StudentDashboardService);
  myCourses$ = this.dashboardService.getMyCourses();
}
