import {AfterViewInit, Component, ElementRef, EventEmitter, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';

import {ColoredConstants} from '../../models/constants.enum';
import {ImageUploadService} from '../../../system/image-upload/services/image-upload.service';

@Component({
  selector: 'colored-drag-and-drop',
  templateUrl: './drag-and-drop.component.html'
})
export class DragAndDropComponent implements AfterViewInit {

  @ViewChild('uploadFile', {static: true})
  private uploadingFile: ElementRef;

  @Output() handleFiles = new EventEmitter<File>();

  constructor(private imageUploadService: ImageUploadService) {
  }

  getFiles(files: FileList) {
    if (files.length > 0) {
      this.handleFiles.emit(files.item(0));
    }
  }

  ngAfterViewInit(): void {
    this.uploadingFile.nativeElement.accept = ColoredConstants.ACCEPT_FILES;
  }
}
