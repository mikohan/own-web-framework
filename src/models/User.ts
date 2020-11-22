import axios, { AxiosResponse } from 'axios';
import { url } from '../config';
import { Eventing } from './Eventing';

interface NativeUserProps {
  [key: string]: any;
  id?: number;
  name?: string;
  age?: number;
}
export class User {
  public events: Eventing = new Eventing();
  constructor(private data: NativeUserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: NativeUserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(`${url}/users/${this.get('id')}`)
      .then((response: AxiosResponse) => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      axios.put(`${url}/users/${id}`, this.data);
    } else {
      axios.post(`${url}/users`, this.data);
    }
  }
}
