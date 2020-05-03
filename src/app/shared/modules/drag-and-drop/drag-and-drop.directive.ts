import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

import {ColoredConstants} from '../../models/constants.enum';

@Directive({
  selector: '[dragFile]'
})
export class DragAndDropDirective {

  constructor() {
  }

  @Output() fileDropped = new EventEmitter<any>();

  @HostListener('dragover', ['$event']) public onDragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('drop', ['$event']) onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    const uploadFile = event.dataTransfer.files.item(0);
    if (ColoredConstants.ACCEPT_FILES.includes(uploadFile.type)) {
      this.fileDropped.emit(event.dataTransfer.files);
    }
  }
}
