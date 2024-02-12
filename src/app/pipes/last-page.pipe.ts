import { Pipe, PipeTransform } from '@angular/core';
import { Pagination } from '@@Types/Pagination';

@Pipe({
  name: 'lastPage',
  standalone: true,
})
export class LastPagePipe implements PipeTransform {
  transform(value: Pagination<any> | null) {
    return value?.totalPages;
  }
}
