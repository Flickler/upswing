import { Pipe, PipeTransform } from '@angular/core';

import { Pagination } from '@@Types/Pagination';
import { ClassesCards } from '@@Types/Class';

@Pipe({
  name: 'classesCardContent',
  standalone: true,
})
export class ClassesCardsContentPipe implements PipeTransform {
  transform(value: Pagination<ClassesCards> | null) {
    return value?.content;
  }
}
