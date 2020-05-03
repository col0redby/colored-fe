import {NgModule} from '@angular/core';

import {DragAndDropComponent} from './drag-and-drop.component';
import {DragAndDropDirective} from './drag-and-drop.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    DragAndDropComponent,
    DragAndDropDirective
  ],
  entryComponents: [
    DragAndDropComponent
  ],
  exports: [
    DragAndDropComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DragAndDropModule {
}
