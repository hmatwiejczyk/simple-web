import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { UserProps, User } from "./models/User";
import { baseUrl } from "./environment";

const users = new Collection(baseUrl, (json: UserProps) => {
  return User.createUser(json);
});

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
})
users.fetch();