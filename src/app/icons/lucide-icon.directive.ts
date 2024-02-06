import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'lucide-icons[size]',
  standalone: true,
})
export class LucideIconsDirective {
  constructor(private el: ElementRef<HTMLElement>) {
    this.el.nativeElement.style.display = 'flex';
    this.el.nativeElement.style.alignItems = 'center';
    this.el.nativeElement.style.justifyContent = 'center';
    this.el.nativeElement.style.transition = '0.4s ease-out';
  }
}
