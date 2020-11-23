import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name: name });
    } else {
      throw new Error('Element not found');
    }
  };
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
    <div>
    <h1>User Form</h1>
    <h4>${this.model.get('name')}</h4>
    <h4>${this.model.get('age')}</h4>
    <input />
    <button class="set-name">Change Name</button>
    <button class="set-age">Set Age</button>
    </div>
    `;
  }
}
