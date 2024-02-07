import { LucideIcons } from '@@Icons/lucide-icons.component';
import { Admin } from '@@Types/Admin';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'admin-card',
  standalone: true,
  imports: [LucideIcons],
  templateUrl: './admin-card.component.html',
  styleUrl: './admin-card.component.scss',
})
export class AdminCardComponent {
  @Input({ required: true }) admin!: Admin;
}
