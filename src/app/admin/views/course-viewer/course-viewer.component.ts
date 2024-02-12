import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { CoursesCardsContentPipe } from '@@Pipes/get-courses-cards-content.pipe';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { CourseCardComponent } from '@@Components/course-card/course-card.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-course-viewer',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    CoursesCardsContentPipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    CourseCardComponent,
    LucideIcons,
  ],
  templateUrl: './course-viewer.component.html',
  styleUrl: './course-viewer.component.scss',
})
export class CourseViewerComponent {
  private dashboardService = inject(AdminDashboardService);
  protected courses$ = this.dashboardService.getCourses(0);
}
