import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';

import * as fromCommonCore from '../../../core/store';
import {Image} from '../../models/image.model';

@Component({
  selector: 'colored-image-preview',
  templateUrl: './image-preview.component.html'
})
export class ImagePreviewComponent implements OnInit {

  private image$: Observable<Image>;
  private currentImageId: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store$: Store<fromCommonCore.GeneralCoreState>) {
  }

  ngOnInit() {
    this.currentImageId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.image$ = this.store$.pipe(
      select(fromCommonCore.getSelectedImage),
      filter(image => !!image)
    );
  }

  editImage($event: any) {
    if ($event.value) {
      this.store$.dispatch(fromCommonCore.updateCurrentImageRequest({id: this.currentImageId, updatingField: $event}));
    }
  }

  close() {
    this.router.navigateByUrl('/');
  }

  deletePhoto() {
    this.store$.dispatch(fromCommonCore.deleteCurrentImageRequest({id: this.currentImageId}));
  }
}
