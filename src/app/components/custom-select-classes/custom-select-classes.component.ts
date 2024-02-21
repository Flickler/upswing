import { ToastComponent } from '@@Components/toast/toast.component';
import { SelectService } from '@@Services/select.service';
import { OptionClass } from '@@Types/Class';
import { AsyncPipe, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

@Component({
  selector: 'custom-select-classes',
  standalone: true,
  imports: [NgClass, AsyncPipe, ToastComponent],
  templateUrl: './custom-select-classes.component.html',
  host: {
    class: 'custom_select_container',
  },
})
export class CustomSelectClassesComponent {
  @Input() submitted = false;
  @Input() invalid = false;
  @Input() targetArea?: string;
  @Output() setValue = new EventEmitter<string>();

  private selectService = inject(SelectService);
  protected courseClass$ = this.selectService.getClasses();
  selected = 'Selecione um curso';
  optionsContainer = false;

  optionsContainerToggle() {
    this.optionsContainer = !this.optionsContainer;
  }

  optionClick(option: OptionClass) {
    this.selected = `${option.code} - ${option.courseName}`;
    this.setValue.emit(option.classId);
    this.optionsContainer = false;
  }
}
