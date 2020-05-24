import {createAction, props} from '@ngrx/store';

import {ReactiveFormControl} from '../../../../shared/modules/reactive-form/models/reactive-form-controls.model';

export const buildLoginFormControls = createAction(
  'Build Login Form Controls'
);

export const buildRegistrationFormControls = createAction(
  'Build Registration Form Controls'
);

export const setAuthFormControls = createAction(
  'Set Auth Form Controls',
  props<{formControls: ReactiveFormControl[]}>()
);

export const buildAuthFormControlsFailed = createAction(
  'Build Auth Form Controls Failed',
  props<{error: Error}>()
);
