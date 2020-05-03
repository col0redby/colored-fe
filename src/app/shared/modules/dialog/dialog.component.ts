import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

import {DialogRef} from './dialog-ref';

@Component({
  selector: 'colored-dialog',
  templateUrl: './dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements AfterContentInit, OnDestroy {

  childComponentType: Type<any>;
  componentRef: ComponentRef<any>;

  @ViewChild('contentInsertion', {read: ViewContainerRef, static: true})
  insertionPoint: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetection: ChangeDetectorRef,
              private dialogRef: DialogRef) {
  }

  ngAfterContentInit(): void {
    this.loadDialogContent(this.childComponentType);
    this.changeDetection.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  clickModal($event: MouseEvent) {
    $event.stopPropagation();
  }

  loadDialogContent(componentType: Type<any>) {
    const componentFactoryResolver = this.componentFactoryResolver.resolveComponentFactory(componentType);

    this.insertionPoint.clear();
    this.componentRef = this.insertionPoint.createComponent(componentFactoryResolver);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
