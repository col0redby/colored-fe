import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {filter, tap} from 'rxjs/operators';

import {ProfileState} from './store/reducers';
import * as fromProfileStore from './store';
import {Image} from '../../shared/models/image.model';

@Component({
  selector: 'colored-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

}
