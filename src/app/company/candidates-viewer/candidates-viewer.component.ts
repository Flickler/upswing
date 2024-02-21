import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { CurrentPagePipe } from '@@Pipes/get-current-page.pipe';
import { LastPagePipe } from '@@Pipes/last-page.pipe';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { CandidatesCardComponent } from '@@Components/candidates-card/candidates-card.component';
import { NothingCardComponent } from '@@Components/nothing-card/nothing-card.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { CompanyDashboardService } from '@@Services/company-dashboard.service';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-candidates-viewer',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    CurrentPagePipe,
    LastPagePipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    CandidatesCardComponent,
    NothingCardComponent,
    PaginationSectionComponent,
    LucideIcons,
  ],
  templateUrl: './candidates-viewer.component.html',
  styleUrl: './candidates-viewer.component.scss',
})
export class CandidatesViewerComponent {
  private routerSnapshot = inject(ActivatedRoute).snapshot;
  private dashboardService = inject(CompanyDashboardService);
  protected candidates$ = this.dashboardService.getOfferCandidates(
    this.routerSnapshot.params['id'],
    0
  );

  getPage(page: number) {
    this.candidates$ = this.dashboardService.getOfferCandidates(
      this.routerSnapshot.params['id'],
      page
    );
  }
}
