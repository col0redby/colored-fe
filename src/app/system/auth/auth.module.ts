import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {ReactiveFormModule} from '../../shared/modules/reactive-form/reactive-form.module';
import * as fromAuthStore from '../auth/store';
import {effects} from './store/effects';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormModule,

    StoreModule.forFeature(fromAuthStore.authKey, fromAuthStore.reducer),
    EffectsModule.forFeature(effects)
  ]
})
export class AuthModule {
}
