import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { CurrentPagePipe } from '@@Pipes/get-current-page.pipe';
import { LastPagePipe } from '@@Pipes/last-page.pipe';
import { ClassesCardsContentPipe } from '@@Pipes/get-classes-cards-content.pipe';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { ClassCardComponent } from '@@Components/class-card/class-card.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { CardLoadingComponent } from '@@Components/card-loading/card-loading.component';
import { NothingCardComponent } from '@@Components/nothing-card/nothing-card.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-class-viewer',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    CurrentPagePipe,
    LastPagePipe,
    ClassesCardsContentPipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    ClassCardComponent,
    PaginationSectionComponent,
    CardLoadingComponent,
    NothingCardComponent,
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
