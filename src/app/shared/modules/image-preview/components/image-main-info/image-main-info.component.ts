import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Image} from '../../../../models/image.model';

@Component({
  selector: 'colored-image-main-info',
  templateUrl: './image-main-info.component.html'
})
export class ImageMainInfoComponent implements OnInit {

  @Input() mainInfo: Image;

  @Output() editMainInfo = new EventEmitter<any>();
  @Output() likePhoto = new EventEmitter<any>();
  @Output() unlikePhoto = new EventEmitter<any>();
  @Output() sendComment = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onEdit(field: string, value: any) {
    this.editMainInfo.emit({field, value});
  }

  onLikePhoto($event) {
    this.likePhoto.emit($event);
  }

  onUnlikePhoto($event) {
    this.unlikePhoto.emit($event);
  }

  onSendComment($event: any) {
    this.sendComment.emit($event);
  }
}
