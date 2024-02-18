import { CompanyService } from '@@Services/company.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'company-outlet',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet/>',
  providers: [CompanyService],
})
export class CompanyComponent {}
