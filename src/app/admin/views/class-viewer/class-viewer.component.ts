import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { LastPagePipe } from '@@Pipes/last-page.pipe';
import { ClassesCardsContentPipe } from '@@Pipes/get-classes-cards-content.pipe';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { ClassCardComponent } from '@@Components/class-card/class-card.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';

@Component({
  selector: 'upswing-class-viewer',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    LastPagePipe,
    ClassesCardsContentPipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    ClassCardComponent,
    PaginationSectionComponent,
    LucideIcons,
  ],
  templateUrl: './class-viewer.component.html',
  styleUrl: './class-viewer.component.scss',
})
export class ClassViewerComponent {
  dashboardService = inject(AdminDashboardService);
  class$ = this.dashboardService.getClasses(0);

  getPage(page: number) {
    this.class$ = this.dashboardService.getClasses(page);
  }
}
