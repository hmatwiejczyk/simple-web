import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { baseUrl } from '../environment';
import { Attributes } from "./Attributes";
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
}
