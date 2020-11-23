import { User } from './models/User';

const appDiv = document.getElementById('app') as HTMLElement;

function render(value: any): void {
  const content: HTMLElement = document.createElement('div');
  content.innerHTML = `<pre>${JSON.stringify(value, null, 4)}</pre>`;
  appDiv.appendChild(content);
}

const collection = User.buildCollection();
collection.fetch();

collection.on('change', () => {
  render(collection.models);
  console.log(collection.models);
});

// setTimeout(() => {
//   render(collection.models);
// }, 1000);
