import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@@Environments/environment';
import { Pagination } from '@@Types/Pagination';
import { Admin, Admins } from '@@Types/Admin';
import { StudentsCards } from '@@Types/Student';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private readonly path = environment.apiUrl + '/list';
  private http = inject(HttpClient);

  listAdmins(page: number) {
    return this.http.get<Pagination<Admins>>(this.path + '/admin', {
      params: { page: page },
    });
  }

  listAdminById(id: string) {
    return this.http.get<Admin>(this.path + '/admin/' + id);
  }

  listStudents(page: number) {
    return this.http.get<Pagination<StudentsCards>>(
      this.path + '/admin/students',
      { params: { page: page } }
    );
  }
}
