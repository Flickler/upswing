import { Pipe, PipeTransform } from '@angular/core';

import { Pagination } from '@@Types/Pagination';
import { MyCoursesCards } from '@@Types/Course';

@Pipe({
  name: 'studentCoursesCardContent',
  standalone: true,
})
export class StudentCoursesCardsContentPipe implements PipeTransform {
  transform(value: Pagination<MyCoursesCards> | null) {
    return value?.content;
  }
}
