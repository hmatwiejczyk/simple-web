import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';
import { baseUrl } from './environment';

const collection = new Collection<User, UserProps>(baseUrl, (json: UserProps) =>
  User.createUser(json)
);
collection.on('change', () => {
  console.log(collection);
});
collection.fetch();
