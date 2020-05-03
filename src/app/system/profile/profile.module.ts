import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {ProfileComponent} from './profile.component';
import * as fromProfileStore from './store';
import {effects} from './store/effects';
import {ProfileRoutingModule} from './profile-routing.module';
import {ImagePreviewModule} from '../../shared/modules/image-preview/image-preview.module';
import {ProfileHomeComponent} from './components/profile-home/profile-home.component';
import {IconModule} from '../../shared/modules/icon/icon.module';
import {ViewImageModule} from '../../shared/modules/view-image/view-image.module';

@NgModule({
  declarations: [ProfileComponent, ProfileHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    ImagePreviewModule,
    ProfileRoutingModule,

    StoreModule.forFeature(fromProfileStore.profileKey, fromProfileStore.reducer),
    EffectsModule.forFeature(effects),
    IconModule,
    ViewImageModule
  ]
})
export class ProfileModule {
}
