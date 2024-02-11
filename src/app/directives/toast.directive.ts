import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  inject,
} from '@angular/core';

@Directive({
  selector: 'toast',
  standalone: true,
})
export class ToastDirective {
  @Input({ required: true }) type!: 'info' | 'warn' | 'success';
  @HostBinding('class')
  get classType() {
    return `toast toast_${this.type}`;
  }
  el = inject(ElementRef).nativeElement as HTMLElement;
}
