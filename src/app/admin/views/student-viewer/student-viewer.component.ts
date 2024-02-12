import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { StudentsCardsContentPipe } from '@@Pipes/get-students-cards-content.pipe';
import { LastPagePipe } from '@@Pipes/last-page.pipe';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { StudentCardComponent } from '@@Components/student-card/student-card.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-student-viewer',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    StudentsCardsContentPipe,
    LastPagePipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    StudentCardComponent,
    PaginationSectionComponent,
    LucideIcons,
  ],
  templateUrl: './student-viewer.component.html',
  styleUrl: './student-viewer.component.scss',
})
export class StudentViewerComponent {
  private dashboardService = inject(AdminDashboardService);
  protected students$ = this.dashboardService.getStudents(0);

  getPage(page: number) {
    this.students$ = this.dashboardService.getStudents(page);
  }
}
