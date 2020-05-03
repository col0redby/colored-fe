import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {AccessLevel} from '../../shared/models/access-level.model';
import {AppRoutes} from '../../app-routes.enum';
import {Image} from '../../shared/models/image.model';
import {FieldEntryModel} from '../../shared/modules/image-preview/models/entry.model';

@Injectable({providedIn: 'root'})
export class CommonForImagesService {

  constructor(private http: HttpClient) {
  }

  getAccessLevels(): Observable<AccessLevel[]> {
    return this.http.get<AccessLevel[]>(AppRoutes.getAccessLevels);
  }

  getImageById(id: number): Observable<Image> {
    return this.http.get<Image>(`${AppRoutes.actionWithImages}/${id}`);
  }

  updateImage(id: number, updatingField: FieldEntryModel): Observable<Image> {
    const requestBody = {};
    requestBody[updatingField.field] = updatingField.value;
    return this.http.put<Image>(`${AppRoutes.actionWithImages}/${id}`, requestBody);
  }

  deleteImage(id: number) {
    return this.http.delete(`${AppRoutes.actionWithImages}/${id}`);
  }
}
