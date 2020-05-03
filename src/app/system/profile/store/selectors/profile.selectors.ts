import {createSelector} from '@ngrx/store';

import * as fromProfileStore from '../reducers';
import {ProfileState} from '../../store';

export const selectProfileImages = createSelector(fromProfileStore.getProfileState,
  (state: ProfileState) => state.images
);
