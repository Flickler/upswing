import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@@Environments/environment';
import { AdminDashboardComponent } from '@@Admin/admin-dashboard/admin-dashboard.component';
import { CoursesCards } from '@@Types/Course';
import { Pagination } from '@@Types/Pagination';

@Injectable({
  providedIn: AdminDashboardComponent,
})
export class AdminDashboardService {
  private http = inject(HttpClient);
  private path = environment.apiUrl + '/list/admin';
  protected isPanelActive = signal(true);

  getPanel() {
    return this.isPanelActive.asReadonly();
  }

  panelToggle() {
    this.isPanelActive.update((curr) => !curr);
  }

  getCourses(page: number) {
    return this.http.get<Pagination<CoursesCards>>(this.path + '/courses', {
      params: { page: page },
    });
  }
}
