import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { url } from '../config';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(url);
}
