import { Injectable, signal } from '@angular/core';

import { StudentDashboardComponent } from '@@Student/student-dashboard/student-dashboard.component';

@Injectable({
  providedIn: StudentDashboardComponent,
})
export class StudentDashboardService {
  isPanelActive = signal(true);

  getPanel() {
    return this.isPanelActive.asReadonly();
  }

  panelToggle() {
    this.isPanelActive.update((curr) => !curr);
  }
}
