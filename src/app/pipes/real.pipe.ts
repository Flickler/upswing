import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realCurrent',
  standalone: true,
})
export class RealCurrent implements PipeTransform {
  transform(valor: number): string {
    return (
      'R$ ' +
      valor
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')
    );
  }
}
