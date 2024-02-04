import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

import { DashboardService } from '@@Services/dashboard.service';
import { DashboardHeaderComponent } from '@@Components/dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from '@@Components/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardMainComponent } from '@@Components/dashboard-main/dashboard-main.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    DashboardMainComponent,
  ],
  providers: [DashboardService],
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
