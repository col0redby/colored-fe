import {Injectable} from '@angular/core';

import {
  ReactiveFormControl,
  ReactiveFormControlOption,
  ReactiveFormControlType,
  ReactiveFormControlValidatorType
} from '../models/reactive-form-controls.model';
import {ReactiveFormModule} from '../reactive-form.module';

@Injectable({providedIn: ReactiveFormModule})
export class ReactiveFormBuilder {

  private formControl: ReactiveFormControl = new ReactiveFormControl();
  private formControls: ReactiveFormControl[] = [];

  setTitle(title: string) {
    this.formControl.title = title;
    return this;
  }

  setControlName(controlName: string) {
    this.formControl.controlName = controlName;
    return this;
  }

  setValue(value: any) {
    this.formControl.value = value;
    return this;
  }

  setControlType(controlType: ReactiveFormControlType) {
    this.formControl.type = controlType;
    return this;
  }

  setValidator(type: ReactiveFormControlValidatorType, value?: any) {
    if (!this.formControl.validators) {
      this.formControl.validators = new Map<ReactiveFormControlValidatorType, any>();
    }
    this.formControl.validators.set(type, value);
    return this;
  }

  setAvailableValues(availableValues: ReactiveFormControlOption[]) {
    this.formControl.availableValues = availableValues;
    return this;
  }

  buildFormControl() {
    this.formControls.push(this.formControl);
    this.formControl = new ReactiveFormControl();
    return this;
  }

  buildFormControls() {
    const formControls = this.formControls;
    this.formControls = [];
    return formControls;
  }
}
