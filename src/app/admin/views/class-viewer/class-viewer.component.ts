import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LucideIcons } from '@@Icons/lucide-icons.component';
import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';

@Component({
  selector: 'upswing-class-viewer',
  standalone: true,
  imports: [RouterLink, ViewerHeadingComponent, LucideIcons],
  templateUrl: './class-viewer.component.html',
  styleUrl: './class-viewer.component.scss',
})
export class ClassViewerComponent {}
