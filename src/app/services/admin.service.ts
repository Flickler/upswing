import { Injectable } from '@angular/core';

import { Admin } from '@@Types/Admin';
import { AdminComponent } from '@@Admin/admin.component';

@Injectable({
  providedIn: AdminComponent,
})
export class AdminService {
  private admin?: Admin;

  getAccount() {
    return this.admin?.account;
  }
}
