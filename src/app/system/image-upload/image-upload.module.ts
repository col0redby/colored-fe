import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {ImageUploadComponent} from './image-upload.component';
import {ImageUploadRoutingModule} from './image-upload-routing.module';
import {DragAndDropModule} from '../../shared/modules/drag-and-drop/drag-and-drop.module';
import * as fromUploadImage from './store';
import {UploadImageModalComponent} from './components/upload-image-modal/upload-image-modal.component';
import {uploadImageEffects} from './store/effects';
import {LoadSpinnerModule} from '../../shared/modules/load-spinner/load-spinner.module';
import {ReactiveFormModule} from '../../shared/modules/reactive-form/reactive-form.module';
import {ViewImageModule} from '../../shared/modules/view-image/view-image.module';

@NgModule({
  declarations: [
    ImageUploadComponent,
    UploadImageModalComponent
  ],
  entryComponents: [
    UploadImageModalComponent
  ],
  imports: [
    CommonModule,
    DragAndDropModule,
    ImageUploadRoutingModule,
    LoadSpinnerModule,
    ReactiveFormModule,

    StoreModule.forFeature(fromUploadImage.uploadImageKey, fromUploadImage.reducer),
    EffectsModule.forFeature(uploadImageEffects),
    ViewImageModule
  ]
})
export class ImageUploadModule {
}
