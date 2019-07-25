import { UserEdit } from './views/UserEdit';
import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { UserProps, User } from "./models/User";
import { baseUrl } from "./environment";

const user = User.createUser({ name: 'NAME', age: 20 });
const root = document.getElementById('form');
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('no root element');
}



const users = new Collection(baseUrl, (json: UserProps) => {
  return User.createUser(json);
});

users.on('change', () => {
  const root = document.getElementById('list');
  if (root) {
    new UserList(root, users).render();
  }
})
users.fetch();
