import { Component, Input } from '@angular/core';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { ClassCard } from '@@Types/Class';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'class-card',
  standalone: true,
  imports: [NgClass, DatePipe, LucideIcons],
  templateUrl: './class-card.component.html',
  styleUrl: './class-card.component.scss',
})
export class ClassCardComponent {
  @Input({ required: true }) classItem!: ClassCard;
  protected menu = false;
}
