import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
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
