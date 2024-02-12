import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true,
})
export class PhonePipe implements PipeTransform {
  transform(value: string) {
    if (!value) {
      return '';
    }

    const phone = value.toString().replace(/\D/g, '');

    if (phone.length > 12) {
      return phone.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/, '+$1 ($2) $3-$4');
    } else if (phone.length > 11) {
      return phone.replace(/(\d{2})?(\d{2})?(\d{4})?(\d{4})/, '+$1 ($2) $3-$4');
    } else if (phone.length > 10) {
      return phone.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
    } else if (phone.length > 9) {
      return phone.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');
    } else if (phone.length > 5) {
      return phone.replace(/^(\d{2})?(\d{4})?(\d{0,4})/, '($1) $2-$3');
    } else if (phone.length > 1) {
      return phone.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');
    } else {
      return phone.replace(/^(\d*)/, '($1');
    }
  }
}
