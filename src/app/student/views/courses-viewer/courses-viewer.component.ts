import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { StudentCoursesCardsContentPipe } from '@@Pipes/get-student-courses-cards-content.pipe';
import { StudentDashboardService } from '@@Services/student-dashboard.service';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'upswing-courses-viewer',
  standalone: true,
  imports: [
    AsyncPipe,
    StudentCoursesCardsContentPipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    PaginationSectionComponent,
  ],
  templateUrl: './courses-viewer.component.html',
  styleUrl: './courses-viewer.component.scss',
})
export class CoursesViewerComponent {
  dashboardService = inject(StudentDashboardService);
  myCourses$ = this.dashboardService.getMyCourses();
}
