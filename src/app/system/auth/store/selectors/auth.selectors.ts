import {createSelector} from '@ngrx/store';

import {getAuthState} from '../reducers';

export const getAuthFormControls = createSelector(getAuthState,
  state => state.authFormControls
);
