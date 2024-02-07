import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';

@Component({
  selector: 'upswing-job-offer-viewer',
  standalone: true,
  imports: [RouterLink, ViewerHeadingComponent, LucideIcons],
  templateUrl: './job-offer-viewer.component.html',
  styleUrl: './job-offer-viewer.component.scss',
})
export class JobOfferViewerComponent {}
