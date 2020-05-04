import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CommentsBlockComponent} from './shared/modules/comments-block/comments-block.component';

const routes: Routes = [
  {
    path: 'upload', loadChildren: () => import('./system/image-upload/image-upload.module').then(value => value.ImageUploadModule)
  },
  {
    path: 'img', loadChildren: () => import('./system/profile/profile.module').then(value => value.ProfileModule)
  },
  {
    path: '', redirectTo: 'img', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
