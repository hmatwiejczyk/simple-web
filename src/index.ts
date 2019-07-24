import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.createUser({ name: 'NAME', age: 20 });
const root = document.getElementById('root');
if (root) {
  const userFrom = new UserForm(root, user);
  userFrom.render();
} else {
  throw new Error('no root element');
}
