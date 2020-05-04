import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  PRIMARY_OUTLET,
  Resolve,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlSegmentGroup,
  UrlTree
} from '@angular/router';

import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';

import * as fromCommonStore from '../../../core/store';

@Injectable({providedIn: 'root'})
export class ProfileImageResolver implements Resolve<UrlSegment> {

  constructor(private store$: Store<fromCommonStore.GeneralCoreState>,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UrlSegment> | Observable<never> {
    const imageId = parseInt(route.paramMap.get('id'), 10);

    this.store$.dispatch(fromCommonStore.getImagesByIdRequest({id: imageId}));

    const pathUrlTree: UrlTree = this.router.parseUrl(state.url);
    const urlSegmentGroup: UrlSegmentGroup = pathUrlTree.root.children[PRIMARY_OUTLET];
    const rootSegment = urlSegmentGroup.segments[0];

    return of(rootSegment);
  }
}
