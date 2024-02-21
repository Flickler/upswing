import { Component, Input, inject } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';

import { JobOfferCard } from '@@Types/JobOffer';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { AdminDashboardService } from '@@Services/admin-dashboard.service';
import { take } from 'rxjs';

@Component({
  selector: 'job-offer-card',
  standalone: true,
  imports: [NgClass, DatePipe, PopupModalComponent, LucideIcons],
  templateUrl: './job-offer-card.component.html',
  styleUrl: './job-offer-card.component.scss',
})
export class JobOfferCardComponent {
  private dashboardService = inject(AdminDashboardService);
  @Input({ required: true }) job!: JobOfferCard;
  protected menu = false;
  protected modal = false;
  protected visible = true;

  approve() {
    this.dashboardService
      .approvedJob(this.job.jobOfferId)
      .pipe(take(1))
      .subscribe(() => (this.visible = false));
  }

  notApprove() {
    this.dashboardService
      .notApprovedJob(this.job.jobOfferId)
      .pipe(take(1))
      .subscribe(() => (this.visible = false));
  }
}
