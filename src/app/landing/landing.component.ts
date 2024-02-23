import { Component } from '@angular/core';

import { LandHeaderComponent } from './land-header/land-header.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { LandFooterComponent } from './land-footer/land-footer.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LandHeaderComponent, LandFooterComponent, LucideIcons],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
