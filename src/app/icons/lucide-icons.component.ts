import { Component, Input, OnChanges } from '@angular/core';

import { Icons, IconsProps } from './lucide-icons';
import { LucideIconsDirective } from './lucide-icon.directive';

@Component({
  selector: 'lucide-icons',
  standalone: true,
  hostDirectives: [LucideIconsDirective],
  template: `
    @if(icon){
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="size"
      [attr.height]="size"
      [attr.stroke]="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      viewBox="0 0 24 24"
    >
      <!-- PATHS -->
      @if(icon.paths){ @for (path of icon.paths; track $index) {
      <path [attr.d]="path" />
      } }
      <!-- CIRCLES -->
      @if(icon.circles){ @for (circle of icon.circles; track $index) {
      <circle [attr.cx]="circle.cx" [attr.cy]="circle.cy" [attr.r]="circle.r" />
      } }
      <!-- LINES -->
      @if(icon.lines){ @for (line of icon.lines; track $index) {
      <line
        [attr.x1]="line.x1"
        [attr.x2]="line.x2"
        [attr.y1]="line.y1"
        [attr.y2]="line.y2"
      />
      } }
    </svg>
    }
  `,
})
export class LucideIcons implements OnChanges {
  @Input({ required: true }) name!: Icons;
  @Input() size: number = 20;
  @Input() color: string = 'black';
  icon?: IconsProps;

  async ngOnChanges() {
    this.icon = await import('./lucide-icons').then((i) => i.icons[this.name]);
  }
}
