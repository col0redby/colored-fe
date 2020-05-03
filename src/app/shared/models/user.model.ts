import {BaseModel} from './base.model';

export interface User extends BaseModel {
  username: string;
  avatar?: Avatar;
}

export interface Avatar {
  xs?: string;
  sm?: string;
  md?: string;
}
