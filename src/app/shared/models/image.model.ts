import {BaseModel} from './base.model';
import {User} from './user.model';
import {Genre} from './genre.model';
import {Like} from './user-actions.model';
import {Color} from './color.model';

export interface Image extends BaseModel {
  title: string;
  original: string;
  user: User;
  genre: Genre;
  tags: Tag[];
  views: number;
  likes: UserActions<Like>;
  comments: UserActions<Comment>;
  colors: Color[];
  metadata: Metadata;
  accessLevel: accessLevelTypes;
  createdAt: Date;
  description?: string;
  width?: number;
  height?: number;
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  album?: any;
}

export interface Tag extends BaseModel {
  title: string;
}

export interface Metadata {
  exposureTimeDescription: string;
  exposureTimeInverse?: number;
  isoDescription: string;
  iso?: number;
  apertureDescription: string;
  aperture?: number;
  gpsLatitudeDescription: string;
  gpsLatitude?: number;
  gpsLongitudeDescription: string;
  gpsLongitude?: number;
  gpsAltitudeDescription: string;
  gpsAltitudeMeters?: number;
}

export type accessLevelTypes = 'public' | 'private';

export interface UserActions<T> {
  count: number;
  list: T[];
}
