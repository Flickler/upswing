import { Component } from '@angular/core';

import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [LucideIcons],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {}
