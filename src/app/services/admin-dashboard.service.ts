import { Injectable, signal } from '@angular/core';

import { AdminDashboardComponent } from '@@Admin/admin-dashboard/admin-dashboard.component';

@Injectable({
  providedIn: AdminDashboardComponent,
})
export class AdminDashboardService {
  isPanelActive = signal(true);

  getPanel() {
    return this.isPanelActive.asReadonly();
  }

  panelToggle() {
    this.isPanelActive.update((curr) => !curr);
  }
}
