import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProfileComponent} from './profile.component';
import {ImagePreviewComponent} from '../../shared/modules/image-preview/image-preview.component';
import {ProfileHomeComponent} from './components/profile-home/profile-home.component';
import {ProfileImageResolver} from './resolvers/profile-image.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        component: ProfileHomeComponent,
      },
      {
        path: ':id',
        component: ImagePreviewComponent,
        resolve: {
          image: ProfileImageResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
