import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { CourseCardComponent } from '@@Components/course-card/course-card.component';

@Component({
  selector: 'upswing-course-viewer',
  standalone: true,
  imports: [
    RouterLink,
    ViewerHeadingComponent,
    CourseCardComponent,
    LucideIcons,
  ],
  templateUrl: './course-viewer.component.html',
  styleUrl: './course-viewer.component.scss',
})
export class CourseViewerComponent {}
