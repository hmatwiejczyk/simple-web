import axios, { AxiosResponse } from 'axios';
import { baseUrl } from '../environment';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
type Callback = () => void;
export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach(cb => cb());
  }
  async fetch() {
    const res: AxiosResponse = await axios.get(`${baseUrl}${this.get('id')}`);
    await this.set(res.data);
  }
}
