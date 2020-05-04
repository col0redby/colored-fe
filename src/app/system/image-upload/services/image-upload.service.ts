import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {Genre} from '../../../shared/models/genre.model';
import {AppRoutes} from '../../../app-routes.enum';
import {ImageRequest} from '../models/image-upload-request.model';

@Injectable({providedIn: 'root'})
export class ImageUploadService {

  constructor(private http: HttpClient) {
  }

  public uploadImage(file: File): Observable<string> {
    const uploadFileFormData: FormData = new FormData();
    uploadFileFormData.set('file', file);
    return this.http.post<string>(AppRoutes.uploadImage, uploadFileFormData);
  }

  public getGenresForSavingImages(): Observable<Genre[]> {
    return this.http.get<Genre[]>(AppRoutes.getGenres);
  }

  public saveImage(request: ImageRequest): Observable<any> {
    request = {...request, userId: 1};
    return this.http.post<any>(AppRoutes.actionWithImages, request);
  }
}
