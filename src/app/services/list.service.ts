import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@@Environments/environment';
import { Pagination } from '@@Types/Pagination';
import { Admin, Admins } from '@@Types/Admin';
import { BusinessAreas } from '@@Types/BussinesArea';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private readonly path = environment.apiUrl + '/list';
  private http = inject(HttpClient);

  listAdmins(page: number) {
    return this.http.get<Pagination<Admins>>(this.path + '/admin?page=' + page);
  }

  listAdminById(id: string) {
    return this.http.get<Admin>(this.path + '/admin/' + id);
  }

  listBussinesArea() {
    return this.http.get<BusinessAreas>(this.path + '/business-area');
  }
}
