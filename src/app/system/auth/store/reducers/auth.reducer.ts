import {Action, createFeatureSelector, createReducer, on} from '@ngrx/store';

import {ReactiveFormControl} from '../../../../shared/modules/reactive-form/models/reactive-form-controls.model';
import * as fromAuthActions from '../actions';

export interface AuthState {
  authFormControls: ReactiveFormControl[];
}

export const INIT_STATE: AuthState = {
  authFormControls: null
};

const authReducer = createReducer(
  INIT_STATE,
  on(fromAuthActions.setAuthFormControls, (state, {formControls}) => ({
    ...state,
    authFormControls: formControls
  }))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}

export const authKey = 'auth';

export const getAuthState = createFeatureSelector<AuthState>(authKey);
