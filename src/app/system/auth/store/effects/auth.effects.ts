import {Injectable} from '@angular/core';

import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';

import {ReactiveFormBuilder} from '../../../../shared/modules/reactive-form/builders/reactive-form.builder';
import * as fromStore from '../index';
import {catchError, switchMap} from 'rxjs/operators';
import {
  ReactiveFormControlType,
  ReactiveFormControlValidatorType
} from '../../../../shared/modules/reactive-form/models/reactive-form-controls.model';
import {ValidatorReg} from '../../../../core/constants/validatorReg';
import {of} from 'rxjs';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
              private reactiveFormBuilder: ReactiveFormBuilder) {
  }

  @Effect()
  buildLoginFormControls$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.buildLoginFormControls),
      switchMap(() => {
          const formControls = this.reactiveFormBuilder
            .setTitle('Email')
            .setControlName('email')
            .setControlType(ReactiveFormControlType.Email)
            .setValue(null)
            .setValidator(ReactiveFormControlValidatorType.Required)
            .setValidator(ReactiveFormControlValidatorType.Email)
            .buildFormControl()

            .setTitle('Password')
            .setControlName('password')
            .setControlType(ReactiveFormControlType.Password)
            .setValue(null)
            .setValidator(ReactiveFormControlValidatorType.Required)
            .setValidator(ReactiveFormControlValidatorType.MinLength, 8)
            .setValidator(ReactiveFormControlValidatorType.MaxLength, 20)
            .setValidator(ReactiveFormControlValidatorType.Pattern, ValidatorReg.Password)
            .buildFormControl()
            .buildFormControls();

          return [fromStore.setAuthFormControls({formControls})];
        }
      ),
      catchError(err => of(fromStore.buildAuthFormControlsFailed(err)))
    )
  );

  @Effect()
  buildRegistrationFormControls$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromStore.buildRegistrationFormControls),
      switchMap(() => {
          const formControls = this.reactiveFormBuilder
            .setTitle('Name')
            .setControlName('name')
            .setControlType(ReactiveFormControlType.String)
            .setValue(null)
            .setValidator(ReactiveFormControlValidatorType.Required)
            .setValidator(ReactiveFormControlValidatorType.Pattern, ValidatorReg.Name)
            .setValidator(ReactiveFormControlValidatorType.MaxLength, 20)
            .buildFormControl()

            .setTitle('Surname')
            .setControlName('surname')
            .setControlType(ReactiveFormControlType.String)
            .setValue(null)
            .setValidator(ReactiveFormControlValidatorType.Required)
            .setValidator(ReactiveFormControlValidatorType.Pattern, ValidatorReg.Name)
            .setValidator(ReactiveFormControlValidatorType.MaxLength, 30)
            .buildFormControl()

            .setTitle('Email')
            .setControlName('email')
            .setControlType(ReactiveFormControlType.Email)
            .setValue(null)
            .setValidator(ReactiveFormControlValidatorType.Required)
            .setValidator(ReactiveFormControlValidatorType.Email)
            .buildFormControl()

            .setTitle('Password')
            .setControlName('password')
            .setControlType(ReactiveFormControlType.Password)
            .setValue(null)
            .setValidator(ReactiveFormControlValidatorType.Required)
            .setValidator(ReactiveFormControlValidatorType.MinLength, 8)
            .setValidator(ReactiveFormControlValidatorType.MaxLength, 20)
            .setValidator(ReactiveFormControlValidatorType.Pattern, ValidatorReg.Password)
            .buildFormControl()
            .buildFormControls();

          return [fromStore.setAuthFormControls({formControls})];
        }
      ),
      catchError(err => of(fromStore.buildAuthFormControlsFailed(err)))
    )
  );
}
