import {createAction, props} from '@ngrx/store';

import {Image} from '../../../../shared/models/image.model';

export const getProfileImages = createAction(
  'Get Profile Images'
);

export const getProfileImagesSuccess = createAction(
  'Get Profile Success',
  props<{images: Image[]}>()
);

export const getProfileImagesFailed = createAction(
  'Get Profile Failed',
  props<{error: Error}>()
);
