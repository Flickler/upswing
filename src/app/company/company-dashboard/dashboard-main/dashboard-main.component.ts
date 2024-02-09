import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'company-dashboard-main',
  standalone: true,
  imports: [RouterOutlet, NgClass],
  templateUrl: './dashboard-main.component.html',
})
export class CompanyDashboardMainComponent {}
