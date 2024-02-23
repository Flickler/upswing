import { Component } from '@angular/core';

import { LandHeaderComponent } from './land-header/land-header.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { LandFooterComponent } from './land-footer/land-footer.component';
import { LandTeamComponent } from './land-team/land-team.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    LandHeaderComponent,
    LandFooterComponent,
    LandTeamComponent,
    LucideIcons,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
