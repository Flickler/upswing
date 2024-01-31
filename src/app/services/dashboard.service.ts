import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: DashboardService,
})
export class DashboardService {
  isPanelActive = signal(true);

  getPanel() {
    return this.isPanelActive.asReadonly();
  }

  panelToggle() {
    this.isPanelActive.update((curr) => !curr);
  }
}
