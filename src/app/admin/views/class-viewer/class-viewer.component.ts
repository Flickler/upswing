import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { ClassesCardsContentPipe } from '@@Pipes/get-classes-cards-content.pipe';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { ClassCardComponent } from '@@Components/class-card/class-card.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-class-viewer',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    ClassesCardsContentPipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    ClassCardComponent,
    LucideIcons,
  ],
  templateUrl: './class-viewer.component.html',
  styleUrl: './class-viewer.component.scss',
})
export class ClassViewerComponent {
  dashboardService = inject(AdminDashboardService);
  class$ = this.dashboardService.getClasses(0);
}
