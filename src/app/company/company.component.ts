import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'company-outlet',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet/>',
})
export class CompanyComponent {}
