import { Model } from './Model';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Collection } from './Collection';
import { baseUrl } from '../environment';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
export class User extends Model<UserProps> {
  static createUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(baseUrl)
    );
  }
  static createUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(baseUrl, (json: UserProps) =>
      User.createUser(json)
    );
  }
  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
