import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { take } from 'rxjs';

import { ListService } from '@@Services/list.service';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { PaginationSectionComponent } from '@@Components/pagination-section/pagination-section.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { StudentsCards } from '@@Types/Student';

@Component({
  selector: 'upswing-student-viewer',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    ViewerHeadingComponent,
    PaginationSectionComponent,
    LucideIcons,
  ],
  templateUrl: './student-viewer.component.html',
  styleUrl: './student-viewer.component.scss',
})
export class StudentViewerComponent {
  private listService = inject(ListService);
  protected pagination = 0;
  private students$ = this.getPage({ currPage: 0, lastPage: 0 });
  protected students?: StudentsCards;
  protected lastPage = 0;

  getPage(page: { currPage: number; lastPage: number }) {
    return this.listService
      .listStudents(page.currPage)
      .pipe(take(1))
      .subscribe((res) => {
        this.students = res.content;
        this.lastPage = res.totalPages;
      });
  }
}
