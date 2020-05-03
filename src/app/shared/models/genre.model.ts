import {BaseModel} from './base.model';

export interface Genre extends BaseModel {
  title: string;
}

export interface GenreView extends Genre {
  cover: string;
}
