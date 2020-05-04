import {Component, OnInit} from '@angular/core';

import {DialogConfig} from '../dialog/configs/dialog-config';
import {DialogRef} from '../dialog/dialog-ref';

@Component({
  selector: 'colored-close-form-modal',
  templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(private dialogData: DialogConfig,
              private dialogRef: DialogRef) {
  }

  ngOnInit() {
  }

  confirm() {
    this.dialogRef.confirm();
  }
}
