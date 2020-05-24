import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FullScreenComponent} from './full-screen.component';
import {ViewImageModule} from '../view-image/view-image.module';
import {IconModule} from '../icon/icon.module';

@NgModule({
  declarations: [FullScreenComponent],
    imports: [
        CommonModule,
        ViewImageModule,
        IconModule
    ]
})
export class FullScreenModule {
}
