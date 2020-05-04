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
  @Output() likePhoto = new EventEmitter();
  @Output() unlikePhoto = new EventEmitter();
  @Output() sendComment = new EventEmitter();

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

  onLikePhoto($event: any) {
    this.likePhoto.emit($event);
  }

  onUnlikePhoto($event: any) {
    this.unlikePhoto.emit($event);
  }

  onSendComment($event: any) {
    this.sendComment.emit($event);
  }
}
