import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { Admin } from '@@Types/Admin';
import { PhonePipe } from '@@Pipes/phone-number.pipe';

@Component({
  selector: 'admin-card',
  standalone: true,
  imports: [NgClass, PhonePipe, PopupModalComponent, LucideIcons],
  templateUrl: './admin-card.component.html',
  styleUrl: './admin-card.component.scss',
})
export class AdminCardComponent {
  @Input({ required: true }) admin!: Admin;
  protected menu = false;
  protected modal = false;
}
