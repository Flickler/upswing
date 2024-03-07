import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { ListService } from '@@Services/list.service';
import { CurrentPagePipe } from '@@Pipes/get-current-page.pipe';
import { LastPagePipe } from '@@Pipes/last-page.pipe';
import { AdminsCardsContentPipe } from '@@Pipes/get-admins-cards-content.pipe';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { AdminCardComponent } from '@@Components/admin-card/admin-card.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { CardLoadingComponent } from '@@Components/card-loading/card-loading.component';
import { NothingCardComponent } from '@@Components/nothing-card/nothing-card.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'app-admin-viewer',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    CurrentPagePipe,
    LastPagePipe,
    AdminsCardsContentPipe,
    ViewerHeadingComponent,
    LoadSectionComponent,
    AdminCardComponent,
    PaginationSectionComponent,
    CardLoadingComponent,
    NothingCardComponent,
    LucideIcons,
  ],
  templateUrl: './admin-viewer.component.html',
  styleUrl: './admin-viewer.component.scss',
})
export class AdminViewerComponent {
  listService = inject(ListService);
  admins$ = this.listService.listAdmins(0);

  getPage(page: number) {
    this.admins$ = this.listService.listAdmins(page);
  }
}
