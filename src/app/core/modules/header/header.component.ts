import {Component, OnDestroy} from '@angular/core';

import {filter, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';

import {DialogService} from '../../../shared/modules/dialog/dialog.service';
import {UploadImageModalComponent} from '../../../system/image-upload/components/upload-image-modal/upload-image-modal.component';
import * as fromStore from '../../../system/image-upload/store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'colored-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnDestroy {

  private uploadImageModal: Subscription;

  constructor(private modalService: DialogService,
              private store$: Store<fromStore.UploadImageState>) {
  }

  uploadImage() {
    this.uploadImageModal = this.modalService.open(UploadImageModalComponent).pipe(
      filter(result => !!result.isConfirmed)
    ).subscribe(value => this.store$.dispatch(fromStore.uploadImageRequest()));
  }

  ngOnDestroy(): void {
    this.uploadImageModal.unsubscribe();
  }
}
