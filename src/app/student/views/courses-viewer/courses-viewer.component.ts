import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { Component } from '@angular/core';

@Component({
  selector: 'upswing-courses-viewer',
  standalone: true,
  imports: [
    ViewerHeadingComponent,
    LoadSectionComponent,
    PaginationSectionComponent,
  ],
  templateUrl: './courses-viewer.component.html',
  styleUrl: './courses-viewer.component.scss',
})
export class CoursesViewerComponent {}
