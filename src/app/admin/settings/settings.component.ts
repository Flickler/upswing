import { Component } from '@angular/core';

import { ViewerHeadingComponent } from '@@Components/viewer-heading/viewer-heading.component';
import { LoadSectionComponent } from '@@Components/load-section/load-section.component';

@Component({
  selector: 'upswing-settings',
  standalone: true,
  imports: [ViewerHeadingComponent, LoadSectionComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {}
