interface UserProps {
  [key: string]: string | number;
}
interface NativeUserProps {
  [key: string]: any;
  name?: string;
  age?: number;
}
export class User {
  constructor(private data: NativeUserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
