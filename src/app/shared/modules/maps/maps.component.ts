import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'colored-maps',
  templateUrl: './maps.component.html'
})
export class MapsComponent implements OnInit {

  @Input() height: string;
  @Input() width: string;

  constructor() { }

  ngOnInit() {
  }

}
