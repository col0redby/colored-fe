import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Image} from '../../../../models/image.model';

@Component({
  selector: 'colored-image-main-info',
  templateUrl: './image-main-info.component.html'
})
export class ImageMainInfoComponent implements OnInit {

  @Input() mainInfo: Image;

  @Output() editMainInfo = new EventEmitter<any>();
  @Output() deletePhoto = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onEdit(field: string, value: any) {
    this.editMainInfo.emit({field, value});
  }

  onDeletePhoto() {
    this.deletePhoto.emit();
  }
}
