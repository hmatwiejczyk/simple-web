import { User } from './models/User';

const user = new User({ name: 'G', age: 16 });

user.on('click', () => {});
user.on('hover', () => {});

console.log(user);
