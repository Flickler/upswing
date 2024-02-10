import { Injectable, signal } from '@angular/core';

import { CompanyDashboardComponent } from '@@Company/company-dashboard/company-dashboard.component';

@Injectable({
  providedIn: CompanyDashboardComponent,
})
export class CompanyDashboardService {
  isPanelActive = signal(true);

  getPanel() {
    return this.isPanelActive.asReadonly();
  }

  panelToggle() {
    this.isPanelActive.update((curr) => !curr);
  }
}
