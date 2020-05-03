import {ChangeDetectionStrategy, Component, OnInit, TrackByFunction} from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, tap} from 'rxjs/operators';

import * as fromProfileStore from '../../store';
import {ProfileState} from '../../store';
import {Image} from '../../../../shared/models/image.model';

@Component({
  selector: 'colored-profile-home',
  templateUrl: './profile-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHomeComponent implements OnInit {

  photos$: Observable<Image[]>;

  currentUrl: string;
  trackByPhoto: TrackByFunction<Image> = (index, item) => item.id;

  constructor(private store$: Store<ProfileState>,
              private router: Router) {
  }

  ngOnInit() {
    this.store$.dispatch(fromProfileStore.getProfileImages());

    this.currentUrl = this.router.url;

    this.photos$ = this.store$.pipe(
      select(fromProfileStore.selectProfileImages),
      filter(images => images && images.length > 0),
    );
  }

  getLink(id: any) {
    return this.currentUrl + '/' + id;
  }
}
