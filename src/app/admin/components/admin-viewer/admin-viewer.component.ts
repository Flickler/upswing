import { ListService } from '@@Services/list.service';
import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { Pagination } from '@@Types/Pagination';
import { Admins } from '@@Types/Admin';

@Component({
  selector: 'app-admin-viewer',
  standalone: true,
  imports: [AsyncPipe, LucideIcons],
  templateUrl: './admin-viewer.component.html',
  styleUrl: './admin-viewer.component.scss',
})
export class AdminViewerComponent {
  listService = inject(ListService);
  admins$ = this.listService
    .listAdmins(0)
    .pipe(map((pagination: Pagination<Admins>) => pagination.content));
}
