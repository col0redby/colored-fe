import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action, select, Store} from '@ngrx/store';
import {of, zip} from 'rxjs';
import {catchError, concatMap, filter, flatMap, map, mergeMap, switchMap, tap, withLatestFrom} from 'rxjs/operators';

import * as fromUploadImageActions from '../actions/upload-image.actions';
import * as fromUploadImageStore from '../index';
import * as fromCore from '../../../../core/store';
import {ImageUploadService} from '../../services/image-upload.service';
import {ReactiveFormBuilder} from '../../../../shared/modules/reactive-form/builders/reactive-form.builder';
import {AccessLevel} from '../../../../shared/models/access-level.model';
import {Genre} from '../../../../shared/models/genre.model';
import {
  ReactiveFormControlOption,
  ReactiveFormControlType, ReactiveFormControlValidatorType
} from '../../../../shared/modules/reactive-form/models/reactive-form-controls.model';

@Injectable()
export class UploadImageEffects {

  constructor(private actions$: Actions,
              private store$: Store,
              private imageUploadService: ImageUploadService,
              private reactiveFormBuilder: ReactiveFormBuilder,
              private router: Router) {
  }

  uploadImageBeforeRequest$ = createEffect(() =>
      this.actions$.pipe(
        ofType(fromUploadImageActions.uploadImageRequest),
        tap(() => {
          this.router.navigateByUrl('upload');
          localStorage.removeItem('uploadingFile');
          this.store$.dispatch(fromUploadImageStore.uploadImageRequestSuccess({path: ''}));
        })
      ),
    {dispatch: false}
  );

  uploadImage$ = createEffect(() => this.actions$.pipe(
    ofType(fromUploadImageActions.uploadImageRequest),
    concatMap(action => of(action).pipe(
      withLatestFrom(this.store$.pipe(
        select(fromUploadImageStore.getUploadingFile)
      ))
    )),
    switchMap(([action, uploadingFile]: [Action, File]) => this.imageUploadService.uploadImage(uploadingFile).pipe(
      switchMap(uploadingImagePath => [fromUploadImageActions.uploadImageRequestSuccess({path: uploadingImagePath})]),
      catchError(err => of(fromUploadImageActions.uploadImageRequestFailed(err)))
    )),
    catchError(err => of(fromUploadImageActions.uploadImageRequestFailed(err)))
  ));

  uploadImageSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(fromUploadImageActions.uploadImageRequestSuccess),
        tap(action => localStorage.setItem('uploadingFile', action.path))
      ),
    {dispatch: false}
  );

  getGenres$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUploadImageActions.getGenresRequest),
      switchMap(() => this.imageUploadService.getGenresForSavingImages().pipe(
        switchMap(genres => [
            fromUploadImageActions.getGenresRequestSuccess({genres})
          ]
        ),
        catchError(err => of(fromUploadImageActions.getGenresRequestFailed(err)))
      )),
      catchError(err => of(fromUploadImageActions.getGenresRequestFailed(err)))
    )
  );

  getFormControlsForSavingImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUploadImageActions.getFormControlsForSavingImage),
      concatMap(action => of(action).pipe(
        withLatestFrom(
          this.store$.pipe(select(fromCore.getAccessLevels)),
          this.store$.pipe(select(fromUploadImageStore.getGenres))
        ))
      ),
      switchMap(([action, accessLevels, genres]: [Action, AccessLevel[], Genre[]]) => [
          fromCore.getAccessLevelsRequest(),
          fromUploadImageActions.getGenresRequest(),
          fromUploadImageActions.getInfoForBuildingFormControls()
        ]
      ),
      catchError(err => of(fromUploadImageStore.buildFormControlsForSavingImageFailed(err)))
    )
  );

  getInfoForSavingImages$ = createEffect(() =>
      this.actions$.pipe(
        ofType(fromUploadImageActions.getInfoForBuildingFormControls),
        concatMap(
          () => zip(
            this.actions$.pipe(filter((action: Action) => action.type === fromUploadImageActions.getGenresRequestSuccess.type)),
            this.actions$.pipe(filter((action: Action) => action.type === fromCore.getAccessLevelsRequestSuccess.type)),
          )
        ),
        tap(value => {
          this.store$.dispatch(fromUploadImageActions.buildFormControlsForSavingImage());
        })
      ),
    {dispatch: false}
  );

  buildFormControlsForSavingImages$ = createEffect(() => this.actions$.pipe(
    ofType(fromUploadImageActions.buildFormControlsForSavingImage),
    withLatestFrom(
      this.store$.pipe(
        select(fromCore.getAccessLevels),
        filter(accessLevels => accessLevels.length > 0),
        map(accessLevels => accessLevels.map(accessLevel => {
            return {
              id: accessLevel.id,
              value: accessLevel.level
            } as ReactiveFormControlOption;
          })
        )
      ),
      this.store$.pipe(
        select(fromUploadImageStore.getGenres),
        filter(genres => genres.length > 0),
        map(genres => {
            const options = genres.map(genre => {
              return {
                id: genre.id,
                value: genre.title
              } as ReactiveFormControlOption;
            });
            options.push({id: null, value: 'No Genre'});
            return options;
          }
        )
      )
    ),
    switchMap(([action, accessLevels, genres]: [Action, ReactiveFormControlOption[], ReactiveFormControlOption[]]) => {
        const formControls = this.reactiveFormBuilder
          .setControlName('title')
          .setControlType(ReactiveFormControlType.String)
          .setTitle('Title')
          .setValue(null)
          .setValidator(ReactiveFormControlValidatorType.Required)
          .setValidator(ReactiveFormControlValidatorType.MaxLength, 200)
          .setValidator(ReactiveFormControlValidatorType.MinLength, 2)
          .buildFormControl()

          .setControlName('description')
          .setControlType(ReactiveFormControlType.String)
          .setTitle('Description')
          .setValue(null)
          .buildFormControl()

          .setControlName('genreId')
          .setControlType(ReactiveFormControlType.Options)
          .setTitle('Genre')
          .setValue(null)
          .setAvailableValues(genres)
          .buildFormControl()

          .setControlName('accessLevelId')
          .setControlType(ReactiveFormControlType.Boolean)
          .setTitle('Access Level')
          .setValue(accessLevels[0].id)
          .setAvailableValues(accessLevels)
          .buildFormControl()

          .buildFormControls();
        return [fromUploadImageActions.buildFormControlsForSavingImageSuccess({formControls})];
      }
    ),
    catchError(err => of(fromUploadImageStore.buildFormControlsForSavingImageFailed(err)))
    )
  );

  saveImages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUploadImageStore.saveImageRequest),
      withLatestFrom(
        this.store$.pipe(select(fromUploadImageStore.getUploadImagePath))
      ),
      switchMap(([action, imagePath]: [any, string]) => {
          const requestBody = {...action.savingImage, original: imagePath};
          return this.imageUploadService.saveImage(requestBody).pipe(
            switchMap(() => [fromUploadImageStore.clearStoreAfterSavingImage()]),
            catchError(err => of(fromUploadImageStore.saveImageRequestFailed(err)))
          );
        }
      ),
      catchError(err => of(fromUploadImageStore.saveImageRequestFailed(err)))
    )
  );

  saveImageSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(fromUploadImageActions.clearStoreAfterSavingImage),
        tap(() => {
          this.router.navigateByUrl('img');
          localStorage.removeItem('uploadingFile');
        })
      ),
    {dispatch: false}
  );
}
