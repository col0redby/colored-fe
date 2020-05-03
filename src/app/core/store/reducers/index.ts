import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

import * as fromCommonForImagesState from './common-for-images.reducer';

export interface GeneralCoreState {
  commonForImages: fromCommonForImagesState.CommonForImagesState;
}

export const reducers: ActionReducerMap<any> = {
  commonForImages: fromCommonForImagesState.reducer
};

export const generalCoreStateKey = 'common';

export const getGeneralCoreState = createFeatureSelector<GeneralCoreState>(generalCoreStateKey);
