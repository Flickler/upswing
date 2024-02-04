import { environment } from '@@Environments/environment';
import { BusinessAreas } from '@@Types/BussinesArea';
import { OptionsCourse } from '@@Types/Course';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectService {
  private readonly path = environment.apiUrl + '/list';
  private http = inject(HttpClient);

  getBussinesArea() {
    return this.http.get<BusinessAreas>(this.path + '/business-area');
  }

  getCourses() {
    return this.http.get<OptionsCourse>(this.path + '/course-select');
  }
}
