import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'land-header',
  standalone: true,
  imports: [RouterLink, NgClass, LucideIcons],
  templateUrl: './land-header.component.html',
  styleUrl: './land-header.component.scss',
})
export class LandHeaderComponent {
  isFlyoutActive = false;

  flyoutToggle() {
    this.isFlyoutActive = !this.isFlyoutActive;
  }
}
