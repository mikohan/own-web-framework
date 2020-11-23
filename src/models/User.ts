import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { APISync } from './APISync';
import { url } from '../config';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new APISync<UserProps>(url)
    );
  }
}
