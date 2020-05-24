import {Component, Input, OnInit} from '@angular/core';

import {Color} from '../../models/color.model';

@Component({
  selector: 'colored-average-colors',
  templateUrl: './average-colors.component.html'
})
export class AverageColorsComponent implements OnInit {

  @Input() colors: Color[];

  constructor() {
  }

  ngOnInit() {
  }

}
