import { Model } from './Model';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { APISync } from './APISync';
import { url } from '../config';
import { Collection } from './Collection';

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
  static buildCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(url, (json: UserProps) =>
      User.buildUser(json)
    );
  }
  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age: age });
  }
}
