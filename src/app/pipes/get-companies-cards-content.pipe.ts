import { Pipe, PipeTransform } from '@angular/core';

import { Pagination } from '@@Types/Pagination';
import { CompaniesCards } from '@@Types/Company';

@Pipe({
  name: 'companiesCardContent',
  standalone: true,
})
export class CompaniesCardsContentPipe implements PipeTransform {
  transform(value: Pagination<CompaniesCards> | null) {
    return value?.content;
  }
}
