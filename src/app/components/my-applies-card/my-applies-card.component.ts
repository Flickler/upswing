import { Component, Input, inject } from '@angular/core';
import { NgClass } from '@angular/common';

import { PopupModalComponent } from '@@Components/popup-modal/popup-modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { JobOfferCard } from '@@Types/JobOffer';
import { StudentDashboardService } from '@@Services/student-dashboard.service';
import { StudentService } from '@@Services/student.service';
import { take } from 'rxjs';

@Component({
  selector: 'my-applies-card',
  standalone: true,
  imports: [NgClass, PopupModalComponent, LucideIcons],
  templateUrl: './my-applies-card.component.html',
  styleUrl: './my-applies-card.component.scss',
})
export class MyAppliesCardComponent {
  private studentService = inject(StudentService);
  private dashboardService = inject(StudentDashboardService);
  @Input({ required: true }) JobOffer!: JobOfferCard;
  protected menu = false;
  protected modal = false;
  protected subject = false;
  protected visible = true;

  unapplyJob() {
    this.dashboardService
      .unapplyVacancy({
        jobOfferId: this.JobOffer.jobOfferId,
        studentId: this.studentService.getUserId(),
      })
      .pipe(take(1))
      .subscribe(() => (this.visible = false));
  }
}
