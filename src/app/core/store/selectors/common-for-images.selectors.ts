import {createSelector} from '@ngrx/store';

import * as fromFeature from '../reducers';

export const getCommonForImagesState = createSelector(fromFeature.getGeneralCoreState,
  state => state.commonForImages
);

export const getAccessLevels = createSelector(getCommonForImagesState,
  state => state.accessLevels
);

export const getSelectedImage = createSelector(getCommonForImagesState,
  state => state.selectedImage
);
