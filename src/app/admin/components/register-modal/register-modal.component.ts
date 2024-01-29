import { Component } from '@angular/core';

@Component({
  selector: 'register-modal',
  standalone: true,
  imports: [],
  template: '<div class="modal"><ng-content/></div>',
  styleUrl: './register-modal.component.scss',
})
export class RegisterModalComponent {}
