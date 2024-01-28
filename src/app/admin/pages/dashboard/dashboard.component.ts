import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { DashboardService } from '@@Services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, NgClass, LucideIcons],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private dashboardService = inject(DashboardService);
  panel = this.dashboardService.getPanel();

  panelToggle() {
    this.dashboardService.panelToggle();
  }
}
