import { Pipe, PipeTransform } from '@angular/core';

import { Pagination } from '@@Types/Pagination';
import { StudentCoursesCards } from '@@Types/Course';

@Pipe({
  name: 'studentCoursesCardContent',
  standalone: true,
})
export class StudentCoursesCardsContentPipe implements PipeTransform {
  transform(value: Pagination<StudentCoursesCards> | null) {
    return value?.content;
  }
}
