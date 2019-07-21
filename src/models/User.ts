import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { baseUrl } from '../environment';
import { Attributes } from './Attributes';
import { AxiosResponse, AxiosPromise } from 'axios';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(baseUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  get get() {
    return this.attributes.get;
  }
  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }
  fetch(): void {
    const id = this.attributes.get('id');
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }
    this.sync.fetch(id).then(
      (response: AxiosResponse): void => {
        this.set(response.data);
      }
    );
  }
  save(): void {
    const data = this.attributes.getAll();
    this.sync
      .save(data)
      .then((response: AxiosResponse): void => this.trigger('save'))
      .catch(() => this.trigger('error'));
  }
}
