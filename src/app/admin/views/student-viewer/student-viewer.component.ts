import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { StudentsCardsContentPipe } from '@@Pipes/get-students-cards-content.pipe';
import { CurrentPagePipe } from '@@Pipes/get-current-page.pipe';
import { LastPagePipe } from '@@Pipes/last-page.pipe';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { StudentCardComponent } from '@@Components/student-card/student-card.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { NothingCardComponent } from '@@Components/nothing-card/nothing-card.component';

@Component({
  selector: 'upswing-student-viewer',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    CurrentPagePipe,
    LastPagePipe,
    StudentsCardsContentPipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    StudentCardComponent,
    PaginationSectionComponent,
    NothingCardComponent,
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
