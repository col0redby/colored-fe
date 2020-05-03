import {createAction, props} from '@ngrx/store';

import {AccessLevel} from '../../../shared/models/access-level.model';
import {Image} from '../../../shared/models/image.model';
import {FieldEntryModel} from '../../../shared/modules/image-preview/models/entry.model';

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
