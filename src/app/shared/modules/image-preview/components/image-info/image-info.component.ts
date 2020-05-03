import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Observable} from 'rxjs';

import {Image} from '../../../../models/image.model';

@Component({
  selector: 'colored-image-info',
  templateUrl: './image-info.component.html'
})
export class ImageInfoComponent implements OnInit {

  @Input() imageInfo$: Observable<Image>;

  @Output() editImageInfo = new EventEmitter();
  @Output() deletePhoto = new EventEmitter();

  constructor() {
  }

  ngOnInit() {

  }

  editCurrentImage($event: any) {
    this.editImageInfo.emit($event);
  }

  onDeletePhoto() {
    this.deletePhoto.emit();
  }
}
