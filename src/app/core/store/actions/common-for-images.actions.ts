import {createAction, props} from '@ngrx/store';

import {AccessLevel} from '../../../shared/models/access-level.model';
import {Image, UserActions} from '../../../shared/models/image.model';
import {FieldEntryModel} from '../../../shared/modules/image-preview/models/entry.model';
import {LikeAction} from '../../../shared/models/like-action.model';
import {Comment, Like} from '../../../shared/models/user-actions.model';

export const getAccessLevelsRequest = createAction(
  'Get Access Levels'
);

export const getAccessLevelsRequestSuccess = createAction(
  'Get Access Levels Success',
  props<{accessLevels: AccessLevel[]}>()
);

export const getAccessLevelsRequestFailed = createAction(
  'Get Access Levels Failed',
  props<{error: Error}>()
);

export const setCurrentImage = createAction(
  'Set Current Image',
  props<{image: Image}>()
);

export const getImagesByIdRequest = createAction(
  'Get Image By Id',
  props<{id: number}>()
);

export const getImagesByIdRequestFailed = createAction(
  'Get Image By Id Failed',
  props<{error: Error}>()
);

export const editCurrentImageFiled = createAction(
  'Edit Current Image Field',
  props<{field: string, value: any}>()
);

export const editCurrentImageFiledFailed = createAction(
  'Edit Current Image Field Failed',
  props<{error: Error}>()
);

export const updateCurrentImageRequest = createAction(
  'Update Current Image',
  props<{id: number, updatingField: FieldEntryModel}>()
);

export const updateCurrentImageRequestFailed = createAction(
  'Update Current Image Failed',
  props<{error: Error}>()
);

export const deleteCurrentImageRequest = createAction(
  'Delete Current Image',
  props<{id: number}>()
);

export const deleteCurrentImageRequestSuccess = createAction(
  'Delete Current Image Success'
);

export const deleteCurrentImageRequestFailed = createAction(
  'Delete Current Image Failed',
  props<{error: Error}>()
);

export const likeImageRequest = createAction(
  'Like Image',
  props<{like: LikeAction}>()
);

export const likeImageRequestSuccess = createAction(
  'Like Image Success',
  props<{likes: UserActions<Like>}>()
);

export const likeImageRequestFailed = createAction(
  'Like Image Failed',
  props<{error: Error}>()
);

export const unlikeImageRequest = createAction(
  'Unlike Image',
  props<{unlike: LikeAction}>()
);

export const unlikeImageRequestSuccess = createAction(
  'Unlike Image Success',
  props<{likes: UserActions<Like>}>()
);

export const unlikeImageRequestFailed = createAction(
  'Unlike Image Failed',
  props<{error: Error}>()
);

export const sendCommentRequest = createAction(
  'Send Comment',
  props<{id: number, comment: Comment}>()
);

export const sendCommentRequestSuccess = createAction(
  'Send Comment Success',
  props<{comments: UserActions<Comment>}>()
);

export const sendCommentRequestFailed = createAction(
  'Send Comment Failed',
  props<{error: Error}>()
);
