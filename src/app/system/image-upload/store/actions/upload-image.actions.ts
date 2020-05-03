import {createAction, props} from '@ngrx/store';

import {ImageRequest} from '../../models/image-upload-request.model';
import {Genre} from '../../../../shared/models/genre.model';
import {ReactiveFormControl} from '../../../../shared/modules/reactive-form/models/reactive-form-controls.model';

export const uploadImageRequest = createAction(
  'Upload Image'
);

export const uploadImageRequestSuccess = createAction(
  'Upload Image Success',
  props<{ path: string }>()
);

export const uploadImageRequestFailed = createAction(
  'Upload Image Failed',
  props<{ error: Error }>()
);

export const setUploadingFile = createAction(
  'Set Uploading File',
  props<{ file: File }>()
);

export const saveImageRequest = createAction(
  'Save Image Request',
  props<{ savingImage: ImageRequest }>()
);

export const saveImageRequestSuccess = createAction(
  'Save Image Request Success'
);

export const saveImageRequestFailed = createAction(
  'Save Image Request Failed',
  props<{ file: File }>()
);

export const getGenresRequest = createAction(
  'Get Genres'
);

export const getGenresRequestSuccess = createAction(
  'Get Genres Success',
  props<{ genres: Genre[] }>()
);

export const getGenresRequestFailed = createAction(
  'Get Genres Failed',
  props<{ error: Error }>()
);

export const getFormControlsForSavingImage = createAction(
  'Get Form Controls For Saving Images'
);

export const getInfoForBuildingFormControls = createAction(
  'Get Info for Building Form Controls'
);

export const buildFormControlsForSavingImage = createAction(
  'Build Form Controls For Saving'
);

export const buildFormControlsForSavingImageSuccess = createAction(
  'Build Form Controls For Saving Images Success',
  props<{ formControls: ReactiveFormControl[] }>()
);

export const buildFormControlsForSavingImageFailed = createAction(
  'Build Form Controls For Saving Images Failed',
  props<{ error: Error }>()
);


