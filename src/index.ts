import { User } from './models/User';

const appDiv = document.getElementById('app') as HTMLElement;

function render(value: any): void {
  const content: HTMLElement = document.createElement('div');
  content.innerHTML = `<pre>${JSON.stringify(value, null, 4)}</pre>`;
  appDiv.appendChild(content);
}

const user = new User({ name: 'Sexy Lady', age: 34 });

user.on('save', () => {
  console.log(user);
});

user.save();

setTimeout(() => {
  const name = user.get('name');
  render(name);
}, 1000);
