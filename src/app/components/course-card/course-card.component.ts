import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { CourseCard } from '@@Types/Course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [NgClass, LucideIcons],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss',
})
export class CourseCardComponent {
  @Input({ required: true }) course!: CourseCard;
  menu = false;
}
