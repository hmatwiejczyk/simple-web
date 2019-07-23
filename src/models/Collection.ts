import { User, UserProps } from './User';
import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();
  constructor(public baseUrl: string) {}

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  async fetch(): Promise<void> {
    const res: AxiosResponse = await axios.get(this.baseUrl);
    res.data.forEach((value: UserProps) => {
      const user = User.createUser(value);
      this.models.push(user);
    });
    this.trigger('change');
  }
}
