import { Component } from '@angular/core';

import { LandHeaderComponent } from './land-header/land-header.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LandHeaderComponent, LucideIcons],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
