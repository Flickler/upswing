import { StudentService } from '@@Services/student.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'student-outlet',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet/>',
  providers: [StudentService],
})
export class StudentComponent {}
