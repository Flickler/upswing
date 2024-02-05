import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'dashboard-main',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './dashboard-main.component.html',
})
export class DashboardMainComponent {}
