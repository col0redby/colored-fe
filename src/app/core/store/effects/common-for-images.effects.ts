import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {select, Store} from '@ngrx/store';

import {CommonForImagesService} from '../../services/common-for-images.service';
import * as fromCommonForImages from '../../store';

@Injectable()
export class CommonForImagesEffects {

  constructor(private actions$: Actions,
              private store$: Store<fromCommonForImages.GeneralCoreState>,
              private router: Router,
              private commonForImagesService: CommonForImagesService) {
  }

  receiveAccessLevels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCommonForImages.getAccessLevelsRequest),
      switchMap(() => this.commonForImagesService.getAccessLevels().pipe(
        switchMap(accessLevels => [
          fromCommonForImages.getAccessLevelsRequestSuccess({accessLevels})
        ]),
        catchError(err => of(fromCommonForImages.getAccessLevelsRequestFailed(err)))
      )),
      catchError(err => of(fromCommonForImages.getAccessLevelsRequestFailed(err)))
    )
  );

  getImageById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCommonForImages.getImagesByIdRequest),
      switchMap(action => this.commonForImagesService.getImageById(action.id).pipe(
        switchMap(image => [
          fromCommonForImages.setCurrentImage({image})
        ]),
        catchError(err => of(fromCommonForImages.getImagesByIdRequestFailed(err)))
      )),
      catchError(err => of(fromCommonForImages.getImagesByIdRequestFailed(err)))
    )
  );

  editCurrentImageField$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCommonForImages.editCurrentImageFiled),
      withLatestFrom(
        this.store$.pipe(select(fromCommonForImages.getSelectedImage))
      ),
      switchMap(([action, currentImage]) => {
          if (Object.keys(currentImage).includes(action.field)) {
            const updatedImage = {...currentImage};
            updatedImage[action.field] = action.value;
            return [fromCommonForImages.setCurrentImage({image: updatedImage})];
          } else {
            return [fromCommonForImages.editCurrentImageFiledFailed({error: new Error(`Can not change Image by filed ${action.field}`)})];
          }
        }
      ),
      catchError(err => of(fromCommonForImages.editCurrentImageFiledFailed(err)))
    )
  );

  updateImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCommonForImages.updateCurrentImageRequest),
      switchMap(action => this.commonForImagesService.updateImage(action.id, action.updatingField).pipe(
        switchMap(image => [
          fromCommonForImages.setCurrentImage({image})
        ]),
        catchError(err => of(fromCommonForImages.updateCurrentImageRequestFailed(err)))
      )),
      catchError(err => of(fromCommonForImages.updateCurrentImageRequestFailed(err)))
    )
  );

  deleteImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCommonForImages.deleteCurrentImageRequest),
      switchMap(action => this.commonForImagesService.deleteImage(action.id).pipe(
        switchMap(() => [
          fromCommonForImages.deleteCurrentImageRequestSuccess()
        ]),
        catchError(err => of(fromCommonForImages.deleteCurrentImageRequestFailed(err)))
      )),
      catchError(err => of(fromCommonForImages.deleteCurrentImageRequestFailed(err)))
    )
  );

  deleteImageSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(fromCommonForImages.deleteCurrentImageRequestSuccess),
        tap(() => this.router.navigateByUrl('/'))
      ),
    {dispatch: false}
  );

  likeImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCommonForImages.likeImageRequest),
      switchMap(action => this.commonForImagesService.likePhoto(action.like).pipe(
        switchMap((updatingLikes) => [
          fromCommonForImages.likeImageRequestSuccess({likes: updatingLikes})
        ]),
        catchError(err => of(fromCommonForImages.likeImageRequestFailed(err)))
      )),
      catchError(err => of(fromCommonForImages.likeImageRequestFailed(err)))
    )
  );

  unlikeImage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCommonForImages.unlikeImageRequest),
      switchMap(action => this.commonForImagesService.unlikePhoto(action.unlike).pipe(
        switchMap((updatingLikes) => [
          fromCommonForImages.unlikeImageRequestSuccess({likes: updatingLikes})
        ]),
        catchError(err => of(fromCommonForImages.unlikeImageRequestFailed(err)))
      )),
      catchError(err => of(fromCommonForImages.unlikeImageRequestFailed(err)))
    )
  );

  sendComment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromCommonForImages.sendCommentRequest),
      switchMap(action => this.commonForImagesService.sendComment(action.id, action.comment).pipe(
        switchMap((comments) => [
          fromCommonForImages.sendCommentRequestSuccess({comments})
        ]),
        catchError(err => of(fromCommonForImages.sendCommentRequestFailed(err)))
      )),
      catchError(err => of(fromCommonForImages.sendCommentRequestFailed(err)))
    )
  );
}
