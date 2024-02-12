import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { CompanyCard } from '@@Types/Company';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { PhonePipe } from '@@Pipes/phone-number.pipe';

@Component({
  selector: 'company-card',
  standalone: true,
  imports: [NgClass, PhonePipe, LucideIcons],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.scss',
})
export class CompanyCardComponent {
  @Input({ required: true }) company!: CompanyCard;
  protected menu = false;
}
