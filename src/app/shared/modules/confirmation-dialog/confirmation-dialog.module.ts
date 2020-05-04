import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ConfirmationDialogComponent} from './confirmation-dialog.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
  declarations: [ConfirmationDialogComponent],
  imports: [
    CommonModule,
    IconModule
  ]
})
export class ConfirmationDialogModule {
}
