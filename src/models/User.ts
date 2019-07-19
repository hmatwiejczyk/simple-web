import axios, { AxiosResponse } from 'axios';
import { baseUrl } from '../environment';
import { Eventing } from './Eventing';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
export class User {
  events: Eventing = new Eventing();
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }
  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
  async fetch() {
    const res: AxiosResponse = await axios.get(`${baseUrl}${this.get('id')}`);
    await this.set(res.data);
  }
  async save() {
    const id = this.get('id');
    if (id) {
      await axios.put(`${baseUrl}${id}`, this.data);
    } else {
      await axios.post(`${baseUrl}`, this.data);
    }
  }
}
