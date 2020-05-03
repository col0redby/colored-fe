import {Injectable} from '@angular/core';

import {ReactiveFormControl, ReactiveFormControlType, ReactiveFormControlValidatorType} from '../models/reactive-form-controls.model';
import {ValidatorFn, Validators} from '@angular/forms';

export class ReactiveFormValidatorAdapter {

  private static convertCustomValidatorToFormValidator(type: ReactiveFormControlValidatorType, value?: any): ValidatorFn {
    switch (type) {
      case ReactiveFormControlValidatorType.Email: {
        return Validators.email;
      }
      case ReactiveFormControlValidatorType.Required: {
        return Validators.required;
      }
      case ReactiveFormControlValidatorType.MaxLength: {
        return Validators.maxLength(value);
      }
      case ReactiveFormControlValidatorType.MinLength: {
        return Validators.minLength(value);
      }
      case ReactiveFormControlValidatorType.Min: {
        return Validators.min(value);
      }
      case ReactiveFormControlValidatorType.Max: {
        return Validators.max(value);
      }
      case ReactiveFormControlValidatorType.Pattern: {
        return Validators.pattern(value);
      }
    }
  }

  static convertCustomValidatorsToFormValidators(validators?: Map<ReactiveFormControlValidatorType, any>) {
    const validatorsFn: ValidatorFn[] = [];
    if (!!validators && validators.size !== 0) {
      for (const [key, value] of validators.entries()) {
        const validatorFn = ReactiveFormValidatorAdapter.convertCustomValidatorToFormValidator(key, value);
        validatorsFn.push(validatorFn);
      }
    }
    return validatorsFn;
  }
}
