import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'viewer-heading',
  standalone: true,
  imports: [RouterLink, LucideIcons],
  template: `
    <lucide-icons
      name="chevronLeft"
      [size]="24"
      color="#666c84"
      routerLink="../"
    />
    <ng-content />
  `,
  styleUrl: './viewer-heading.component.scss',
})
export class ViewerHeadingComponent {}
