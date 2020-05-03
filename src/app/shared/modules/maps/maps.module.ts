import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoogleMapsModule} from '@angular/google-maps';

import {MapsComponent} from './maps.component';

@NgModule({
  declarations: [MapsComponent],
  exports: [
    MapsComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ]
})
export class MapsModule {
}
