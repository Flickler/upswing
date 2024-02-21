import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe, NgClass } from '@angular/common';

import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { JobOfferCard } from '@@Types/JobOffer';
import { RealCurrent } from '@@Pipes/real.pipe';

@Component({
  selector: 'my-vacancy-card',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    DatePipe,
    RealCurrent,
    PopupModalComponent,
    LucideIcons,
  ],
  templateUrl: './my-vacancy-card.component.html',
  styleUrl: './my-vacancy-card.component.scss',
})
export class MyVacancyCardComponent {
  @Input({ required: true }) job!: JobOfferCard;
  protected menu = false;
  protected modal = false;
}
