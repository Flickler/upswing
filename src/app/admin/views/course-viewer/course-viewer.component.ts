import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { CoursesCardsContentPipe } from '@@Pipes/get-courses-cards-content.pipe';
import { CurrentPagePipe } from '@@Pipes/get-current-page.pipe';
import { LastPagePipe } from '@@Pipes/last-page.pipe';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { CourseCardComponent } from '@@Components/course-card/course-card.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { NothingCardComponent } from '@@Components/nothing-card/nothing-card.component';

@Component({
  selector: 'upswing-course-viewer',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    CurrentPagePipe,
    LastPagePipe,
    CoursesCardsContentPipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    CourseCardComponent,
    PaginationSectionComponent,
    NothingCardComponent,
    LucideIcons,
  ],
  templateUrl: './course-viewer.component.html',
  styleUrl: './course-viewer.component.scss',
})
export class CourseViewerComponent {
  private dashboardService = inject(AdminDashboardService);
  protected courses$ = this.dashboardService.getCourses(0);

  getPage(page: number) {
    this.courses$ = this.dashboardService.getCourses(page);
  }
}
