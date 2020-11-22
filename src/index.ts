import { User } from './models/User';

const user = new User({ name: 'Vladimir', age: 49 });
user.set({ name: 'Halk' });

console.log(user.get('name'), user.get('age'));
