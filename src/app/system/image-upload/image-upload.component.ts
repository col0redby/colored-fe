import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {ReactiveFormControl} from '../../shared/modules/reactive-form/models/reactive-form-controls.model';
import * as fromStore from './store';
import {ImageRequest} from './models/image-upload-request.model';
import {Router} from '@angular/router';

@Component({
  selector: 'colored-image-upload',
  templateUrl: './image-upload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageUploadComponent implements OnInit {

  imagePath$: Observable<string>;
  formControls$: Observable<ReactiveFormControl[]>;
  isAvailableImagePath$: Observable<boolean>;

  constructor(private store$: Store<fromStore.UploadImageState>,
              private router: Router) {
  }

  ngOnInit(): void {
    this.store$.dispatch(fromStore.getFormControlsForSavingImage());

    this.imagePath$ = this.store$.pipe(
      select(fromStore.getUploadImagePath)
    );

    this.isAvailableImagePath$ = this.imagePath$.pipe(
      map(path => !!path)
    );

    this.formControls$ = this.store$.pipe(
      select(fromStore.selectFormControlsForSavingImage),
      filter(controls => !!controls && controls.length > 0)
    );
  }

  onSaveImage(savingImage: ImageRequest) {
    this.store$.dispatch(fromStore.saveImageRequest({savingImage}));
  }

  onLeaveWithoutSaving() {
    this.router.navigateByUrl('/');
  }
}
