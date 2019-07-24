import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.createUser({ name: 'NAME', age: 20 });
const userFrom = new UserForm(document.getElementById('root'), user);
userFrom.render();
