import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';

@Component({
  selector: 'upswing-company-viewer',
  standalone: true,
  imports: [RouterLink, ViewerHeadingComponent, LucideIcons],
  templateUrl: './company-viewer.component.html',
  styleUrl: './company-viewer.component.scss',
})
export class CompanyViewerComponent {}
