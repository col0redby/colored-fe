import {Injectable} from '@angular/core';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as fromProfileStore from '../../store';
import {ProfileService} from '../../services/profile.service';

@Injectable()
export class ProfileEffects {

  constructor(private actions$: Actions,
              private profileService: ProfileService) {
  }

  getProfileImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromProfileStore.getProfileImages),
      switchMap(() => this.profileService.getImages().pipe(
        switchMap((images) => [fromProfileStore.getProfileImagesSuccess({images})]),
        catchError(err => of(fromProfileStore.getProfileImagesFailed(err)))
        )
      ),
      catchError(err => of(fromProfileStore.getProfileImagesFailed(err)))
    )
  );
}
