import { User } from './models/User';

const user = new User({ name: 'G', age: 16 });

user.on('click', () => console.log('click 1'));
user.on('click', () => console.log('click 2'));
user.on('hover', () => console.log('hover'));

user.trigger('click');
