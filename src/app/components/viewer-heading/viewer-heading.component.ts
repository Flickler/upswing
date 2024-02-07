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
    <h1><ng-content /></h1>
  `,
  styleUrl: './viewer-heading.component.scss',
})
export class ViewerHeadingComponent {}
