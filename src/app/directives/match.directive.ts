import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[match]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchDirective,
      multi: true,
    },
  ],
})
export class MatchDirective implements Validator {
  @Input({ required: true }) value!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value == control.parent?.get(this.value)?.value
      ? null
      : { notEqual: true };
  }

  static match(FormControlName: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const formControlValue = control.parent?.get(FormControlName)?.value;
      return control.value == formControlValue ? null : { notEqual: true };
    };
  }
}
