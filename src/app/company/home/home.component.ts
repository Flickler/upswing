import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgClass } from '@angular/common';

import { CompanyDashboardService } from '@@Services/company-dashboard.service';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { CompanyService } from '@@Services/company.service';

@Component({
  selector: 'upswing-home',
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgClass, LucideIcons],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private companyService = inject(CompanyService);
  private dashboardService = inject(CompanyDashboardService);
  protected companyName = this.companyService.getUser();
  protected panel = this.dashboardService.getPanel();
}
