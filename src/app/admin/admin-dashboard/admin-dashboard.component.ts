import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';

import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { DashboardHeaderComponent } from '@@Admin/admin-dashboard/dashboard-header/dashboard-header.component';
import { DashboardSidebarComponent } from '@@Admin/admin-dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardMainComponent } from '@@Admin/admin-dashboard/dashboard-main/dashboard-main.component';
import { AdminService } from '@@Services/admin.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterOutlet,
    NgClass,
    DashboardHeaderComponent,
    DashboardSidebarComponent,
    DashboardMainComponent,
  ],
  providers: [AdminDashboardService],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
  private adminService = inject(AdminService);
  private dashboardService = inject(AdminDashboardService);
  protected panel = this.dashboardService.getPanel();
  protected user$ = this.adminService.getUser();
}
