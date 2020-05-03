import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DialogComponent} from './dialog.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
  declarations: [DialogComponent],
  entryComponents: [DialogComponent],
  imports: [
    CommonModule,
    IconModule
  ]
})
export class DialogModule {
}
