import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[sameId]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SameIdDirective,
      multi: true,
    },
  ],
})
export class SameIdDirective implements Validator {
  @Input({ required: true }) value!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value == control.parent?.get(this.value)?.value
      ? null
      : { notEqual: true };
  }

  static sameId() {
    return (control: FormArray): ValidationErrors | null => {
      let controlValues: Set<string> = new Set();
      for (let value of control.value) {
        if (controlValues.has(value)) {
          return { sameId: true };
        } else {
          controlValues.add(value);
        }
      }
      return null;
    };
  }
}
