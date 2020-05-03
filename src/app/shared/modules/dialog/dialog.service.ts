import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type} from '@angular/core';

import {DialogModule} from './dialog.module';
import {DialogComponent} from './dialog.component';
import {DialogConfig} from './dialog-config';
import {DialogInjector} from './dialog-injector';
import {DialogRef} from './dialog-ref';

@Injectable({providedIn: DialogModule})
export class DialogService {

  private dialogComponentRef: ComponentRef<DialogComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private applicationRef: ApplicationRef) {
  }

  private appendDialogToDOM(dialogConfig?: DialogConfig): DialogRef {
    const newTokens: WeakMap<any, any> = new WeakMap();

    if (dialogConfig) {
      newTokens.set(DialogConfig, dialogConfig);
    }

    const dialogRef = new DialogRef();
    newTokens.set(DialogRef, dialogRef);

    const closingSubscription = dialogRef.afterClosed.subscribe(() => {
      this.removeDialogFromDOM();
      closingSubscription.unsubscribe();
    });

    const componentFactoryResolver = this.componentFactoryResolver.resolveComponentFactory(DialogComponent);
    const componentRef = componentFactoryResolver.create(new DialogInjector(this.injector, newTokens));


    this.applicationRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    this.dialogComponentRef = componentRef;

    return dialogRef;
  }

  private removeDialogFromDOM() {
    this.applicationRef.detachView(this.dialogComponentRef.hostView);
    this.dialogComponentRef.destroy();
  }

  open(componentType: Type<any>, dialogConfig?: DialogConfig) {
    const dialogRef = this.appendDialogToDOM(dialogConfig);
    this.dialogComponentRef.instance.childComponentType = componentType;

    return dialogRef.afterClosed;
  }
}
