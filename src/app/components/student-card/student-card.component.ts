import { LucideIcons } from '@@Icons/lucide-icons.component';
import { StudentCard } from '@@Types/Student';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'student-card',
  standalone: true,
  imports: [LucideIcons],
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.scss'
})
export class StudentCardComponent {
  @Input() student!: StudentCard;
}
