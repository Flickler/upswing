import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { StudentCard } from '@@Types/Student';
import { NgClass } from '@angular/common';
import { Component, Input, inject } from '@angular/core';

@Component({
  selector: 'student-card',
  standalone: true,
  imports: [NgClass, PopupModalComponent, LucideIcons],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.scss',
})
export class StudentCardComponent {
  @Input() student!: StudentCard;
  protected menu = false;
  protected classes = false;
  protected modal = false;
}
