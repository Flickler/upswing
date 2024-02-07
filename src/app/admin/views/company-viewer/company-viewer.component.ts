import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';

@Component({
  selector: 'upswing-company-viewer',
  standalone: true,
  imports: [RouterLink, ViewerHeadingComponent, LoadSectionComponent, LucideIcons],
  templateUrl: './company-viewer.component.html',
  styleUrl: './company-viewer.component.scss',
})
export class CompanyViewerComponent {}
