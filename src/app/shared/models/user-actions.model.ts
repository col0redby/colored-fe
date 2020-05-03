import {User} from './user.model';

export class UserAction {
  user: User;
  createdAt: Date;
}

export class Like extends UserAction {
}

export interface Comment extends UserAction {
  text: string;
}
