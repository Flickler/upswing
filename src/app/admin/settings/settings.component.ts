import { Component } from '@angular/core';

import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-settings',
  standalone: true,
  imports: [ViewerHeadingComponent, LoadSectionComponent, LucideIcons],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {}
