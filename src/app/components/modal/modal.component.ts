import { LucideIcons } from '@@Icons/lucide-icons.component';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [RouterLink, LucideIcons],
  template: `
    <div class="modal">
      <lucide-icons name="chevronLeft" routerLink="../" />
      <ng-content />
    </div>
  `,
  styleUrl: './modal.component.scss',
})
export class ModalComponent {}
