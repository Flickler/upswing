import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { take } from 'rxjs';

import { ListService } from '@@Services/list.service';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { StudentsCards } from '@@Types/Student';
import { LoadingComponent } from '@@Components/loading/loading.component';

@Component({
  selector: 'upswing-student-viewer',
  standalone: true,
  imports: [RouterLink, AsyncPipe, LucideIcons, LoadingComponent],
  templateUrl: './student-viewer.component.html',
  styleUrl: './student-viewer.component.scss',
})
export class StudentViewerComponent {
  private listService = inject(ListService);
  protected pagination = signal(0);
  private students$ = this.getPage();
  protected students?: StudentsCards;
  protected lastPage = 0;

  getPage() {
    return this.listService
      .listStudents(this.pagination())
      .pipe(take(1))
      .subscribe((res) => {
        this.students = res.content;
        this.lastPage = res.totalPages;
      });
  }

  previous() {
    if (this.pagination() > 0) {
      this.pagination.update((curr) => curr - 1);
      this.students$ = this.getPage();
    }
  }

  next() {
    if (this.pagination() < this.lastPage - 1) {
      this.pagination.update((curr) => curr + 1);
      this.students$ = this.getPage();
    }
  }
}
