import {Action, createFeatureSelector, createReducer, on} from '@ngrx/store';

import * as fromUploadImageActions from '../actions/upload-image.actions';
import {Genre} from '../../../../shared/models/genre.model';
import {ReactiveFormControl} from '../../../../shared/modules/reactive-form/models/reactive-form-controls.model';

export interface UploadImageState {
  imagePath: string;
  uploadingFile: File;
  genres: Genre[];
  formControlsForSavingImages: ReactiveFormControl[];
}

export const INIT_STATE: UploadImageState = {
  imagePath: null,
  uploadingFile: null,
  genres: [],
  formControlsForSavingImages: null
};

const uploadImageReducer = createReducer(
  INIT_STATE,
  on(fromUploadImageActions.uploadImageRequest, (state) => ({
    ...state,
    formControlsForSavingImages: !!state.formControlsForSavingImages ?
      state.formControlsForSavingImages.map(formControl => {
        return {...formControl, value: null};
      }) : state.formControlsForSavingImages
  })),
  on(fromUploadImageActions.uploadImageRequestSuccess, (state, {path}) => ({
    ...state,
    imagePath: path
  })),
  on(fromUploadImageActions.setUploadingFile, (state, {file}) => ({
      ...state,
      uploadingFile: file
    })
  ),
  on(fromUploadImageActions.getGenresRequestSuccess, (state, {genres}) => ({
    ...state,
    genres
  })),
  on(fromUploadImageActions.buildFormControlsForSavingImageSuccess, (state, {formControls}) => ({
    ...state,
    formControlsForSavingImages: formControls
  })),
  on(fromUploadImageActions.clearStoreAfterSavingImage, (state) => ({
    ...state,
    formControlsForSavingImages: null,
    imagePath: null,
    uploadingFile: null
  }))
);

export function reducer(state: UploadImageState | undefined, action: Action) {
  return uploadImageReducer(state, action);
}

export const uploadImageKey = 'upload-image';

export const getUploadImageState = createFeatureSelector<UploadImageState>(uploadImageKey);
