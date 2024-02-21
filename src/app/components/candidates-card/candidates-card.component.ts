import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { StudentCandidate } from '@@Types/Student';

@Component({
  selector: 'candidates-card',
  standalone: true,
  imports: [NgClass, PopupModalComponent, LucideIcons],
  templateUrl: './candidates-card.component.html',
  styleUrl: './candidates-card.component.scss',
})
export class CandidatesCardComponent {
  @Input({ required: true }) candidate!: StudentCandidate;
  protected menu = false;
  protected classes = false;
  protected modal = false;
}
