import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminService } from '@@Services/admin.service';

@Component({
  selector: 'admin-outlet',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet/>',
  providers: [AdminService],
})
export class AdminComponent {}
