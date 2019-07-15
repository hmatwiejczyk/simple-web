import { User } from './models/User';

const user = new User({ name: 'G', age: 16 });

user.set({ age: 22});
console.log(user.get('name'));
console.log(user.get('age'));
