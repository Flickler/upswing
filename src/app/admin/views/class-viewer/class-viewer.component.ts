import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-class-viewer',
  standalone: true,
  imports: [RouterLink, LucideIcons],
  templateUrl: './class-viewer.component.html',
  styleUrl: './class-viewer.component.scss',
})
export class ClassViewerComponent {}
