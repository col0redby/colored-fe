import {Component, Input, OnInit} from '@angular/core';

import {Metadata} from '../../../../models/image.model';

@Component({
  selector: 'colored-image-metadata',
  templateUrl: './image-metadata.component.html'
})
export class ImageMetadataComponent implements OnInit {

  @Input() metadata: Metadata;

  constructor() {
  }

  ngOnInit() {
  }

}
