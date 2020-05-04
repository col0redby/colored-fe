import {DialogConfig} from './dialog-config';

export class ConfirmationDialogConfig extends DialogConfig {
  icon?: string;
  styleIcon?: string;
  message: string;
  confirmButtonName: string;
  styleButton?: string;
}
