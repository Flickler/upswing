import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-course-viewer',
  standalone: true,
  imports: [RouterLink, LucideIcons],
  templateUrl: './course-viewer.component.html',
  styleUrl: './course-viewer.component.scss',
})
export class CourseViewerComponent {}
