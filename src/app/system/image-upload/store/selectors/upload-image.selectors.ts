import {createSelector} from '@ngrx/store';

import {getUploadImageState} from '../reducers';

export const getUploadImagePath = createSelector(
  getUploadImageState, state => state.imagePath || localStorage.getItem('uploadingFile')
);

export const getUploadingFile = createSelector(
  getUploadImageState, state => state.uploadingFile
);

export const getGenres = createSelector(
  getUploadImageState, state => state.genres
);

export const selectFormControlsForSavingImage = createSelector(
  getUploadImageState, state => state.formControlsForSavingImages
);
