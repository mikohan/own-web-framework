import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';
import { url } from './config';

const users = new Collection(`${url}`, (json: UserProps) => {
  return User.buildUser(json);
});

users.on('change', () => {
  const root = document.getElementById('app');

  if (root) {
    new UserList(root, users).render();
  }
});
users.fetch();
