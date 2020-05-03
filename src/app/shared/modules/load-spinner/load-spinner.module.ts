import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoadSpinnerComponent} from './load-spinner.component';

@NgModule({
  declarations: [LoadSpinnerComponent],
  exports: [
    LoadSpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoadSpinnerModule {
}
