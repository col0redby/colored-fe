import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ImagePreviewComponent} from './image-preview.component';
import {ViewImageModule} from '../view-image/view-image.module';
import { ImageInfoComponent } from './components/image-info/image-info.component';
import {IconModule} from '../icon/icon.module';
import { ImageMetadataComponent } from './components/image-metadata/image-metadata.component';
import { ImageAdditionalInfoComponent } from './components/image-additional-info/image-additional-info.component';
import {AvatarModule} from '../avatar/avatar.module';
import {RouterModule} from '@angular/router';
import { ImageMainInfoComponent } from './components/image-main-info/image-main-info.component';
import {EditableFieldModule} from '../editable-field/editable-field.module';
import {CommentsBlockModule} from '../comments-block/comments-block.module';
import {MapsModule} from '../maps/maps.module';

@NgModule({
  declarations: [
    ImagePreviewComponent,
    ImageInfoComponent,
    ImageMetadataComponent,
    ImageAdditionalInfoComponent,
    ImageMainInfoComponent
  ],
  imports: [
    CommonModule,
    ViewImageModule,
    IconModule,
    AvatarModule,
    RouterModule,
    EditableFieldModule,
    CommentsBlockModule,
    MapsModule
  ]
})
export class ImagePreviewModule {
}
