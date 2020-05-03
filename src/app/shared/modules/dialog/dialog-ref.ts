import {Subject} from 'rxjs';

export class DialogRef {

  private readonly _afterClosed = new Subject<any>();
  public afterClosed = this._afterClosed.asObservable();

  close() {
    this._afterClosed.next({isConfirmed: false});
  }

  confirm() {
    this._afterClosed.next({isConfirmed: true});
  }
}
