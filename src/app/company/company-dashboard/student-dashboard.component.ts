import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';

import { CompanyDashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { CompanyDashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { CompanyDashboardMainComponent } from './dashboard-main/dashboard-main.component';

@Component({
  selector: 'company-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    CompanyDashboardHeaderComponent,
    CompanyDashboardSidebarComponent,
    CompanyDashboardMainComponent,
  ],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss',
})
export class CompanyDashboardComponent {
  // private dashboardService = inject(StudentDashboardService);
  // panel = this.dashboardService.getPanel();
}
