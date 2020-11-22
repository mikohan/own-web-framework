import { User } from './models/User';

const user = new User({ id: 1 });

user.fetch();
setTimeout(() => {
  console.log(user.get('name'), user.get('age'), user.get('id'));
}, 2000);
