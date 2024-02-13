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
  @Input() currPage?: number;
  @Input() lastPage?: number;
  @Output() onPageChange = new EventEmitter<number>();

  previous() {
    if (this.currPage != undefined && this.currPage > 0) {
      this.emit(this.currPage - 1);
    }
  }

  next() {
    if (
      this.currPage != undefined &&
      this.lastPage != undefined &&
      this.currPage < this.lastPage - 1
    ) {
      this.emit(this.currPage + 1);
    }
  }

  emit(page: number) {
    this.onPageChange.emit(page);
  }
}
