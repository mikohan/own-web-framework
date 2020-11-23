import { User } from './models/User';

const appDiv = document.getElementById('app') as HTMLElement;

function render(value: any): void {
  const content: HTMLElement = document.createElement('div');
  content.innerHTML = `<pre>${JSON.stringify(value, null, 4)}</pre>`;
  appDiv.appendChild(content);
}

const user = User.buildUser({ id: 3 });
user.on('change', () => {
  console.log(user);
});
user.set({ name: 'Olesya' });
user.set({ age: 47 });
setTimeout(() => {
  const name = user.get('name');
  render(name);
}, 1000);
