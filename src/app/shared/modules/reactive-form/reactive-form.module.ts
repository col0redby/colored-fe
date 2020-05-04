import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ReactiveFormComponent} from './reactive-form.component';
import {ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';
import {ConfirmationDialogModule} from '../confirmation-dialog/confirmation-dialog.module';

@NgModule({
  declarations: [ReactiveFormComponent],
  exports: [
    ReactiveFormComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ConfirmationDialogModule
  ]
})
export class ReactiveFormModule {
}
