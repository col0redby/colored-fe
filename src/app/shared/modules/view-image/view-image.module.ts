import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ViewImageComponent} from './view-image.component';
import {LoadSpinnerModule} from '../load-spinner/load-spinner.module';

@NgModule({
  declarations: [ViewImageComponent],
  exports: [
    ViewImageComponent
  ],
  imports: [
    CommonModule,
    LoadSpinnerModule
  ]
})
export class ViewImageModule {
}
