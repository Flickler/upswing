import { Pipe, PipeTransform } from '@angular/core';

import { Pagination } from '@@Types/Pagination';
import { CoursesCards } from '@@Types/Course';

@Pipe({
  name: 'coursesCardContent',
  standalone: true,
})
export class CoursesCardsContentPipe implements PipeTransform {
  transform(value: Pagination<CoursesCards> | null) {
    return value?.content;
  }
}
