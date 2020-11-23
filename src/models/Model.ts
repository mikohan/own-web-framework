import { AxiosPromise } from 'axios';

export interface IModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

export interface ISync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface IEventns {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model {}
