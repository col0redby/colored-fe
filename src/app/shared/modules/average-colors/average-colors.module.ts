import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AverageColorsComponent} from './average-colors.component';

@NgModule({
  declarations: [AverageColorsComponent],
  exports: [AverageColorsComponent],
  imports: [
    CommonModule
  ]
})
export class AverageColorsModule {
}
