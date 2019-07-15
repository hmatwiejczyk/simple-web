import { User } from './models/User';

const user = new User({ name: 'Hubert', age: 36 });

console.log(user.get('name'));
console.log(user.get('age'));
