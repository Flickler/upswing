import { Pipe, PipeTransform } from '@angular/core';

import { Pagination } from '@@Types/Pagination';
import { StudentsCards } from '@@Types/Student';

@Pipe({
  name: 'studentsCardContent',
  standalone: true,
})
export class StudentsCardsContentPipe implements PipeTransform {
  transform(value: Pagination<StudentsCards> | null) {
    return value?.content;
  }
}
