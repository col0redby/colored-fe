import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';


const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
