import { User } from './models/User';
import { UserForm } from './views/UserForm';

const appDiv = document.getElementById('app') as HTMLElement;

function render(value: any): void {
  const content: HTMLElement = document.createElement('div');
  content.innerHTML = `<pre>${JSON.stringify(value, null, 4)}</pre>`;
  appDiv.appendChild(content);
}
const user = User.buildUser({ name: 'Lucie', age: 20 });

const userForm = new UserForm(document.querySelector('#app'), user);

userForm.render();
