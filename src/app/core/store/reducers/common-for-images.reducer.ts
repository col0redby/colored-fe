import {Action, createReducer, on} from '@ngrx/store';

import {AccessLevel} from '../../../shared/models/access-level.model';
import * as fromCommonForImagesActions from '../actions';
import {Image} from '../../../shared/models/image.model';

export interface CommonForImagesState {
  accessLevels: AccessLevel[];
  selectedImage: Image;
}

const INIT_STATE: CommonForImagesState = {
  accessLevels: [],
  selectedImage: null
};

const commonForImagesReducer = createReducer(
  INIT_STATE,
  on(fromCommonForImagesActions.getAccessLevelsRequestSuccess, (state, {accessLevels}) => ({
      ...state,
      accessLevels
    })
  ),
  on(fromCommonForImagesActions.getImagesByIdRequest, (state, {id}) => ({
      ...state,
      selectedImage: null
    })
  ),
  on(fromCommonForImagesActions.setCurrentImage, (state, {image}) => ({
      ...state,
      selectedImage: image
    })
  ),
  on(fromCommonForImagesActions.deleteCurrentImageRequestSuccess, (state) => ({
      ...state,
      selectedImage: null
    })
  )
);

export function reducer(state: CommonForImagesState | undefined, action: Action) {
  return commonForImagesReducer(state, action);
}

