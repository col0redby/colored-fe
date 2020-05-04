import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Image} from '../../../../models/image.model';

@Component({
  selector: 'colored-image-additional-info',
  templateUrl: './image-additional-info.component.html'
})
export class ImageAdditionalInfoComponent implements OnInit {

  @Input() additionalInfo: Image;

  @Output() deletePhoto = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onDeletePhoto() {
    this.deletePhoto.emit();
  }
}
