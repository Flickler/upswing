import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';

import { CompanyDashboardService } from '@@Services/company-dashboard.service';
import { CompanyDashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { CompanyDashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { CompanyDashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { CompanyService } from '@@Services/company.service';

@Component({
  selector: 'company-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    NgClass,
    CompanyDashboardHeaderComponent,
    CompanyDashboardSidebarComponent,
    CompanyDashboardMainComponent,
  ],
  templateUrl: './company-dashboard.component.html',
  styleUrl: './company-dashboard.component.scss',
  providers: [CompanyDashboardService],
})
export class CompanyDashboardComponent {
  private companyService = inject(CompanyService);
  private dashboardService = inject(CompanyDashboardService);
  protected user$ = this.companyService.getUser();
  protected panel = this.dashboardService.getPanel();
}
