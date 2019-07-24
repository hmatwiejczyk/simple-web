import { View } from './View';

export class UserForm extends View {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAge,
      'click:.set-name': this.onSetName
    };
  }

  onSetAge = (): void => {
    this.model.setRandomAge();
  };

  onSetName = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>
          Name: ${this.model.get('name')}
        </div>
        <div>
          Age: ${this.model.get('age')}
        </div>
        <input />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set random Age</button>
      </div>
    `;
  }
}
