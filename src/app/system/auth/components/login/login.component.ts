import {Component, OnInit} from '@angular/core';

import {select, Store} from '@ngrx/store';
import {filter} from 'rxjs/operators';
import {Observable} from 'rxjs';

import * as fromStore from '../../store';
import {ReactiveFormControl} from '../../../../shared/modules/reactive-form/models/reactive-form-controls.model';

@Component({
  selector: 'colored-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  private loginFormControls$: Observable<ReactiveFormControl[]>;

  constructor(private store$: Store<fromStore.AuthState>) {
  }

  ngOnInit() {
    this.store$.dispatch(fromStore.buildLoginFormControls());

    this.loginFormControls$ = this.store$.pipe(
      select(fromStore.getAuthFormControls),
      filter(value => !!value && value.length > 0)
    );
  }

}
