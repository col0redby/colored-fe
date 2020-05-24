import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter} from 'rxjs/operators';

import {ReactiveFormControl} from '../../../../shared/modules/reactive-form/models/reactive-form-controls.model';
import * as fromStore from '../../store';

@Component({
  selector: 'colored-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {

  private registrationFormControls$: Observable<ReactiveFormControl[]>;

  constructor(private store$: Store<fromStore.AuthState>,
              private router: Router) {
  }

  ngOnInit() {
    this.store$.dispatch(fromStore.buildRegistrationFormControls());

    this.registrationFormControls$ = this.store$.pipe(
      select(fromStore.getAuthFormControls),
      filter(value => !!value && value.length > 0)
    );
  }

  routeToLogin() {
    this.router.navigateByUrl('../login');
  }
}
