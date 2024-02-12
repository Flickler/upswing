import { Pipe, PipeTransform } from '@angular/core';

import { Pagination } from '@@Types/Pagination';
import { JobOffersCards } from '@@Types/JobOffer';

@Pipe({
  name: 'jobOffersCardContent',
  standalone: true,
})
export class JobOffersCardsContentPipe implements PipeTransform {
  transform(value: Pagination<JobOffersCards> | null) {
    return value?.content;
  }
}
