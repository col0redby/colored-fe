import {Component, ComponentRef, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'colored-full-screen',
  templateUrl: './full-screen.component.html'
})
export class FullScreenComponent implements OnInit {

  @Input() imagePath: string;

  @Output() exitFullScreenMode = new EventEmitter();

  ngOnInit() {
  }

  closeFullScreenMode() {
    this.exitFullScreenMode.emit();
  }
}
