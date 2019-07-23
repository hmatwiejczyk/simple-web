import { Model } from './Model';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { baseUrl } from '../environment';

interface UserProps {
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
}
