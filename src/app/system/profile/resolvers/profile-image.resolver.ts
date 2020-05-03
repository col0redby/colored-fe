import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';

import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {filter, take, tap} from 'rxjs/operators';

import {Image} from '../../../shared/models/image.model';
import * as fromCommonStore from '../../../core/store';

@Injectable({providedIn: 'root'})
export class ProfileImageResolver implements Resolve<Image> {

  constructor(private store$: Store<fromCommonStore.GeneralCoreState>,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Image> | Observable<never> {
    const imageId = parseInt(route.paramMap.get('id'), 10);

    this.store$.dispatch(fromCommonStore.getImagesByIdRequest({id: imageId}));

    return this.store$.pipe(
      select(fromCommonStore.getSelectedImage),
      filter(image => !!image),
      take(1)
    );
  }
}
