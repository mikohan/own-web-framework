import { User } from './models/User';

const user2 = new User({ id: 3 });

user2.set({ name: 'Pretty' });
user2.set({ age: 22 });

user2.save();

setTimeout(() => {
  console.log(user2);
}, 2000);

user2.events.on('change', () => {
  console.log('Change!!!');
});
user2.events.trigger('change');
