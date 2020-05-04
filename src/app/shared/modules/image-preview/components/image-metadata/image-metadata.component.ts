import {Component, Input, OnInit} from '@angular/core';

import {Metadata} from '../../../../models/image.model';

@Component({
  selector: 'colored-image-metadata',
  templateUrl: './image-metadata.component.html'
})
export class ImageMetadataComponent implements OnInit {

  @Input() metadata: Metadata;

  isAvailableMetadata: string | null;

  constructor() {
  }

  ngOnInit() {
    this.isAvailableMetadata = this.metadata ? this.haveMetadata() : null;
  }

  haveMetadata() {
    return this.metadata.gpsAltitudeDescription ||
      this.metadata.apertureDescription ||
      this.metadata.exposureTimeDescription ||
      this.metadata.gpsLatitudeDescription ||
      this.metadata.gpsLongitudeDescription ||
      this.metadata.isoDescription;
  }
}
