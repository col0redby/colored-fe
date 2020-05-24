import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ImageUploadModule} from './system/image-upload/image-upload.module';
import {environment} from '../environments/environment';
import {DialogModule} from './shared/modules/dialog/dialog.module';
import {CoreModule} from './core/core.module';
import {ProfileModule} from './system/profile/profile.module';
import {IconModule} from './shared/modules/icon/icon.module';
import {CommentsBlockModule} from './shared/modules/comments-block/comments-block.module';
import {AuthModule} from './system/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,

    DialogModule,
    ImageUploadModule,
    ProfileModule,
    AuthModule,
    CommentsBlockModule,

    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
