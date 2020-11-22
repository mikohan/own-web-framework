type Callback = () => void;

interface NativeUserProps {
  [key: string]: any;
  name?: string;
  age?: number;
}
export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: NativeUserProps) {}
  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: NativeUserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  }
}
