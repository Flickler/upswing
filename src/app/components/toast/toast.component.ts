import { ToastDirective } from '@@Directives/toast.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'toast',
  standalone: true,
  imports: [],
  hostDirectives: [{ directive: ToastDirective, inputs: ['type'] }],
  template: '<ng-content />',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {}
