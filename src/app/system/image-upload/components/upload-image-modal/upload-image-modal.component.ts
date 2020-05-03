import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';

import {DialogRef} from '../../../../shared/modules/dialog/dialog-ref';
import * as fromUploadImageStore from '../../store';

@Component({
  selector: 'colored-upload-image-modal',
  templateUrl: './upload-image-modal.component.html'
})
export class UploadImageModalComponent implements OnInit {

  constructor(private dialogRef: DialogRef,
              private store$: Store<fromUploadImageStore.UploadImageState>) {
  }

  ngOnInit() {
  }

  uploadImages($event: File) {
    this.store$.dispatch(fromUploadImageStore.setUploadingFile({file: $event}));
    this.dialogRef.confirm();
  }
}
