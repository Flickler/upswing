import { Component } from '@angular/core';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [],
  template: '<div class="modal"><ng-content/></div>',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {}
