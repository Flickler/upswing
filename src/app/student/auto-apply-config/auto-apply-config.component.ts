import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { catchError, of, take } from 'rxjs';

import { ModalComponent } from '@@Components/modal/modal.component';
import { ToastComponent } from '@@Components/toast/toast.component';
import { LucideIcons } from '@@Icons/lucide-icons.component';
import { StudentService } from '@@Services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'upswing-auto-apply-config',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent, ToastComponent, LucideIcons],
  templateUrl: './auto-apply-config.component.html',
  styleUrl: './auto-apply-config.component.scss',
})
export class AutoApplyConfigComponent {
  private fb = inject(NonNullableFormBuilder);
  private studentService = inject(StudentService);
  private router = inject(Router);
  protected form = this.fb.group({
    contract: ['', Validators.required],
    offerLocation: ['', Validators.required],
  });
  protected submitted = false;
  protected disable = false;
  protected err = false;

  protected get contract() {
    return this.form.controls.contract;
  }
  protected get offerLocation() {
    return this.form.controls.offerLocation;
  }

  protected onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.disable = true;
      this.studentService
        .setAutoApply(this.form.value)
        .pipe(
          take(1),
          catchError(() => {
            this.submitted = false;
            this.disable = false;
            return of(null);
          })
        )
        .subscribe((res) => {
          if (res) {
            this.submitted = false;
            this.form.reset();
            this.disable = false;
            this.router.navigateByUrl('st');
          }
        });
    }
  }
}
