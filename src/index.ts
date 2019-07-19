import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

user.set({ name: 'test name', age: 5555 });
user.save();
user.events.on('click', () => {
  console.log('hi');
});

user.events.trigger('click');
