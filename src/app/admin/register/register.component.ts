import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ModalComponent } from '@@Components/modal/modal.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';

@Component({
  selector: 'upswing-register',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgClass, ModalComponent, LucideIcons],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  protected selected = 'student';
  protected container = 'user';

  setRoute(route: string) {
    this.selected = route;
  }

  setContainer(target: 'user' | 'academic') {
    if (target == 'user') {
      this.selected = 'student';
      this.container = target;
    } else {
      this.selected = 'course';
      this.container = target;
    }
  }
}
