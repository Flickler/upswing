import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { SelectService } from '@@Services/select.service';
import { ToastComponent } from '@@Components/toast/toast.component';
import { OptionCourse } from '@@Types/Course';

@Component({
  selector: 'custom-select-courses',
  standalone: true,
  imports: [AsyncPipe, NgClass, ToastComponent],
  templateUrl: './custom-select-courses.component.html',
  host: {
    class: 'custom_select_container',
  },
})
export class CustomSelectCoursesComponent {
  @Input() submitted = false;
  @Input() invalid = false;
  @Output() setValue = new EventEmitter<string>();

  private selectService = inject(SelectService);
  protected courses$ = this.selectService.getCourses();
  selected = 'Selecione um curso';
  optionsContainer = false;

  optionsContainerToggle() {
    this.optionsContainer = !this.optionsContainer;
  }

  optionClick(option: OptionCourse) {
    this.selected = option.courseName;
    this.setValue.emit(option.courseId);
    this.optionsContainer = false;
  }
}
