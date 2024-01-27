import { Component, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { NgClass } from '@angular/common';

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
