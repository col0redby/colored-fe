import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {ProfileModule} from '../profile.module';
import {Image} from '../../../shared/models/image.model';
import {AppRoutes} from '../../../app-routes.enum';

@Injectable({providedIn: 'root'})
export class ProfileService {

  constructor(private http: HttpClient) {
  }

  getImages(): Observable<Image[]> {
    return this.http.get<any[]>(AppRoutes.actionWithImages);
  }
}
