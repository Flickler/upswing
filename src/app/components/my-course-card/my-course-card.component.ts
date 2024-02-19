import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { MyCourseCard } from '@@Types/Course';

@Component({
  selector: 'my-course-card',
  standalone: true,
  imports: [NgClass, PopupModalComponent, LucideIcons],
  templateUrl: './my-course-card.component.html',
  styleUrl: './my-course-card.component.scss',
})
export class MyCourseCardComponent {
  @Input({ required: true }) course!: MyCourseCard;
  menu = false;
  modal = false;
  subject = false;
}
