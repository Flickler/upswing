import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'status-filter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './status-filter.component.html',
  styleUrl: './status-filter.component.scss',
})
export class StatusFilterComponent {
  @Output() onFilterChange = new EventEmitter<'pending' | 'approved'>();
  @Input() active?: 'pending' | 'approved';
  onClick(type: 'pending' | 'approved') {
    this.onFilterChange.emit(type);
  }
}
