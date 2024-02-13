import { Pagination } from '@@Types/Pagination';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currPage',
  standalone: true,
})
export class CurrentPagePipe implements PipeTransform {
  transform(value: Pagination<any> | null) {
    return value?.pageable.pageNumber;
  }
}
