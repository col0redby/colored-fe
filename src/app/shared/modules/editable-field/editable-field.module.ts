import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EditableFieldComponent} from './editable-field.component';
import {IconModule} from '../icon/icon.module';

@NgModule({
  declarations: [EditableFieldComponent],
  exports: [
    EditableFieldComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ]
})
export class EditableFieldModule {
}
