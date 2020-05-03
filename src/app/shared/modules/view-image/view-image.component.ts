import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'colored-view-image',
  templateUrl: './view-image.component.html'
})
export class ViewImageComponent implements OnInit {

  @Input() imagePath: string;
  @Input() styleClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}
