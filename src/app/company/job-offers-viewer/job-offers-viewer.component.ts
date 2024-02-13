import { Component } from '@angular/core';

import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';

@Component({
  selector: 'upswing-job-offers-viewer',
  standalone: true,
  imports: [
    ViewerHeadingComponent,
    LoadSectionComponent,
    PaginationSectionComponent,
  ],
  templateUrl: './job-offers-viewer.component.html',
  styleUrl: './job-offers-viewer.component.scss',
})
export class JobOffersViewerComponent {}
