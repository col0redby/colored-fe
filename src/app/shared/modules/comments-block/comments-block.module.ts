import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsBlockComponent} from './comments-block.component';
import {IconModule} from '../icon/icon.module';
import {AvatarModule} from '../avatar/avatar.module';

@NgModule({
  declarations: [CommentsBlockComponent],
  exports: [
    CommentsBlockComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    AvatarModule
  ]
})
export class CommentsBlockModule {
}
