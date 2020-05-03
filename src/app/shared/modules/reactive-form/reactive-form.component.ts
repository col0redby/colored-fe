import {Component, EventEmitter, Input, OnInit, Output, TrackByFunction} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {Observable} from 'rxjs';
import {filter, take, tap} from 'rxjs/operators';

import {ReactiveFormControl} from './models/reactive-form-controls.model';
import {ReactiveFormValidatorAdapter} from './adapters/validators.adapter';


@Component({
  selector: 'colored-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {

  @Input() formControls$: Observable<ReactiveFormControl[]>;
  @Input() disabled: any;

  @Output() submitForm = new EventEmitter();

  formGroup: FormGroup;

  trackByControl: TrackByFunction<ReactiveFormControl> = (index, item) => {
    return item.controlName;
  }

  ngOnInit() {
    this.formControls$ = this.formControls$.pipe(
      filter(controls => controls && controls.length > 0),
      tap(controls => {
        this.formGroup = new FormGroup({});
        for (const control of controls) {
          this.formGroup.setControl(control.controlName, new FormControl(control.value,
            ReactiveFormValidatorAdapter.convertCustomValidatorsToFormValidators(control.validators)));
        }
      })
    );
  }

  onSubmit() {
    this.submitForm.emit(this.formGroup.value);
  }
}
