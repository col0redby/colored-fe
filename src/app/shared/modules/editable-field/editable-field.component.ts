import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

export type editableType = 'string' | 'text';

@Component({
  selector: 'colored-editable-field',
  templateUrl: './editable-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableFieldComponent {

  @Input() type: editableType;
  @Input() styleClass: string;
  @Input() value: any;

  @Output() valueChange = new EventEmitter();

  @ViewChild('stringInput', {static: false})
  private stringInput: ElementRef;

  @ViewChild('textInput', {static: false})
  private textInput: ElementRef;

  editable = false;

  constructor(private changeDetection: ChangeDetectorRef) {
  }

  onChangeOldValue() {
    this.editable = true;
    this.changeDetection.detectChanges();
    switch (this.type) {
      case 'string': {
        if (this.stringInput) {
          this.stringInput.nativeElement.focus();
        }
        break;
      }
      case 'text': {
        if (this.textInput) {
          this.textInput.nativeElement.focus();
        }
        break;
      }
    }
  }

  onChange($event: any) {
    this.editable = false;
    if (this.value !== $event.target.value) {
      this.valueChange.emit($event.target.value);
    }
  }
}
