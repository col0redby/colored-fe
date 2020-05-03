import {Component, Input, OnInit} from '@angular/core';
import {Avatar} from '../../models/user.model';

@Component({
  selector: 'colored-avatar',
  templateUrl: './avatar.component.html'
})
export class AvatarComponent implements OnInit {

  @Input() avatar: Avatar;

  constructor() { }

  ngOnInit() {
  }

}
