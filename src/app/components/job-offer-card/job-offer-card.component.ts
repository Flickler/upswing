import { Component, Input } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';

import { JobOfferCard } from '@@Types/JobOffer';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'job-offer-card',
  standalone: true,
  imports: [NgClass, DatePipe, LucideIcons],
  templateUrl: './job-offer-card.component.html',
  styleUrl: './job-offer-card.component.scss',
})
export class JobOfferCardComponent {
  @Input({ required: true }) job!: JobOfferCard;
  protected menu = false;
}
