import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-company-viewer',
  standalone: true,
  imports: [RouterLink, LucideIcons],
  templateUrl: './company-viewer.component.html',
  styleUrl: './company-viewer.component.scss',
})
export class CompanyViewerComponent {}
