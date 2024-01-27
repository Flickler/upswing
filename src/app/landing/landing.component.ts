import { Component } from '@angular/core';

import { LandHeaderComponent } from './components/land-header/land-header.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LandHeaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
