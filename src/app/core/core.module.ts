import {NgModule} from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import * as fromGeneralCore from './store';
import {effects} from './store/effects';
import {HeaderModule} from './modules/header/header.module';

@NgModule({
  imports: [
    HeaderModule,

    StoreModule.forFeature(fromGeneralCore.generalCoreStateKey, fromGeneralCore.reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [
    HeaderModule
  ]
})
export class CoreModule {
}
