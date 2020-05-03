import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'colored-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent implements OnInit {

  @Input() styleClass: string;
  @Input() materialIconName: string;
  @Input() alt: string;

  @Output() clickAction = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  clickIcon() {
    this.clickAction.emit();
  }
}
