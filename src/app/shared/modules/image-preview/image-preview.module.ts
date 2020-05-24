import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {ImagePreviewComponent} from './image-preview.component';
import {ViewImageModule} from '../view-image/view-image.module';
import {IconModule} from '../icon/icon.module';
import {ImageMetadataComponent} from './components/image-metadata/image-metadata.component';
import {ImageAdditionalInfoComponent} from './components/image-additional-info/image-additional-info.component';
import {AvatarModule} from '../avatar/avatar.module';
import {ImageMainInfoComponent} from './components/image-main-info/image-main-info.component';
import {EditableFieldModule} from '../editable-field/editable-field.module';
import {CommentsBlockModule} from '../comments-block/comments-block.module';
import {AverageColorsModule} from '../average-colors/average-colors.module';
import {FullScreenComponent} from '../full-screen/full-screen.component';
import {FullScreenModule} from '../full-screen/full-screen.module';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    ImagePreviewComponent,
    ImageMetadataComponent,
    ImageAdditionalInfoComponent,
    ImageMainInfoComponent
  ],
  entryComponents: [
    FullScreenComponent
  ],
    imports: [
        CommonModule,
        ViewImageModule,
        IconModule,
        AvatarModule,
        RouterModule,
        EditableFieldModule,
        CommentsBlockModule,
        AverageColorsModule,
        FullScreenModule,
        AgmCoreModule
    ]
})
export class ImagePreviewModule {
}
