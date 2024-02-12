import { Pipe, PipeTransform } from '@angular/core';

import { Pagination } from '@@Types/Pagination';
import { Admins } from '@@Types/Admin';

@Pipe({
  name: 'adminsCardContent',
  standalone: true,
})
export class AdminsCardsContentPipe implements PipeTransform {
  transform(value: Pagination<Admins> | null) {
    return value?.content;
  }
}
