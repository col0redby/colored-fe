export class ReactiveFormControl {
  controlName: string;
  title: string;
  value: any;
  type: ReactiveFormControlType;
  validators: Map<ReactiveFormControlValidatorType, any>;
  availableValues?: ReactiveFormControlOption[];
}

export enum ReactiveFormControlType {
  String = 'text',
  Number = 'number',
  Boolean = 'boolean',
  Options = 'options',
  Password = 'password',
  Email = 'email'
}

export enum ReactiveFormControlValidatorType {
  Required = 'required',
  Email = 'email',
  MinLength = 'minLength',
  MaxLength = 'maxLength',
  Min = 'min',
  Max = 'max',
  Pattern = 'pattern'
}

export interface ReactiveFormControlOption {
  id: number;
  value: any;
}
