import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { CnpjPipe } from '@@Pipes/cnpj.pipe';
import { PhonePipe } from '@@Pipes/phone-number.pipe';
import { CompanyCard } from '@@Types/Company';
import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'company-card',
  standalone: true,
  imports: [NgClass, PhonePipe, CnpjPipe, PopupModalComponent, LucideIcons],
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.scss',
})
export class CompanyCardComponent {
  @Input({ required: true }) company!: CompanyCard;
  protected menu = false;
  protected modal = false;
}
