import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { JobOfferCard } from '@@Types/JobOffer';

@Component({
  selector: 'my-applies-card',
  standalone: true,
  imports: [NgClass, PopupModalComponent, LucideIcons],
  templateUrl: './my-applies-card.component.html',
  styleUrl: './my-applies-card.component.scss',
})
export class MyAppliesCardComponent {
  @Input({ required: true }) JobOffer!: JobOfferCard;
  menu = false;
  modal = false;
  subject = false;
}
