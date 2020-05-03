import {Action, createFeatureSelector, createReducer, on} from '@ngrx/store';

import {Image} from '../../../../shared/models/image.model';
import * as fromProfileActions from '../actions';

export interface ProfileState {
  images: Image[];
}

export const INIT_STATE: ProfileState = {
  images: null
};

const profileReducer = createReducer(
  INIT_STATE,
  on(fromProfileActions.getProfileImagesSuccess, (state, {images}) => ({
    ...state,
    images
  }))
);

export function reducer(state: ProfileState | undefined, action: Action) {
  return profileReducer(state, action);
}

export const profileKey = 'profile';

export const getProfileState = createFeatureSelector(profileKey);
