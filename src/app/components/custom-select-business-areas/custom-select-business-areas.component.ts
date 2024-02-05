import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';
import { SelectService } from '@@Services/select.service';
import { ToastComponent } from '@@Components/toast/toast.component';
import { BusinessArea } from '@@Types/BussinesArea';

@Component({
  selector: 'custom-select-bussines-areas',
  standalone: true,
  imports: [AsyncPipe, NgClass, ToastComponent],
  templateUrl: './custom-select-business-areas.component.html',
  host: {
    class: 'custom_select_container',
  },
})
export class CustomSelectBusinessAreasComponent {
  @Input() submitted = false;
  @Input() invalid = false;
  @Output() setValue = new EventEmitter<string>();

  private selectService = inject(SelectService);
  protected bussinesAreas$ = this.selectService.getBussinesArea();
  selected = 'Selecione uma area de atuação';
  optionsContainer = false;

  optionsContainerToggle() {
    this.optionsContainer = !this.optionsContainer;
  }

  optionClick(option: BusinessArea) {
    this.selected = option.businessArea;
    this.setValue.emit(option.id);
    this.optionsContainer = false;
  }
}
