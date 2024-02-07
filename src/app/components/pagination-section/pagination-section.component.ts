import { LucideIcons } from '@@Icons/lucide-icons.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pagination-section',
  standalone: true,
  imports: [LucideIcons],
  templateUrl: './pagination-section.component.html',
  styleUrl: './pagination-section.component.scss',
})
export class PaginationSectionComponent {
  currPage = 0;
  @Input() lastPage = 0;
  @Output() onPageChange = new EventEmitter<{
    currPage: number;
    lastPage: number;
  }>();

  previous() {
    if (this.currPage > 0) {
      this.currPage--;
      this.emit();
    }
  }

  next() {
    if (this.currPage < this.lastPage - 1) {
      this.currPage++;
      this.emit();
    }
  }

  emit() {
    this.onPageChange.emit({
      currPage: this.currPage,
      lastPage: this.lastPage,
    });
  }
}
