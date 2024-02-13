import { Component, Input } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';

import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { ClassCard } from '@@Types/Class';

@Component({
  selector: 'class-card',
  standalone: true,
  imports: [NgClass, DatePipe, PopupModalComponent, LucideIcons],
  templateUrl: './class-card.component.html',
  styleUrl: './class-card.component.scss',
})
export class ClassCardComponent {
  @Input({ required: true }) classItem!: ClassCard;
  protected menu = false;
  protected modal = false;
}
