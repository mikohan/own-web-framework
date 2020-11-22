import { User } from './models/User';

const user = new User({ name: 'Vladimir', age: 49 });

user.on('MyEvent', () => console.log('Some thintg'));
user.on('Next event', () => {
  console.log('My event trigered');
});
user.on('MyEvent', () => {
  console.log('Another MyEvent triggered');
});

user.trigger('MyEvent');
user.trigger('MyEventdjdjd');
