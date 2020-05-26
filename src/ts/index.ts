import '../css/index.css';
import '../sass/main.sass';

const message: string = 'Hello Webpack';

window.console.log(message);

interface IUser {
  name: string;
  surname: string;
  age: number;
}

class User implements IUser {
  readonly name: string;
  readonly surname: string;
  readonly age: number;

  constructor(userInfo: IUser) {
    this.name = userInfo.name;
    this.surname = userInfo.surname;
    this.age = userInfo.age;
  }

  public getUserName(): string {
    return this.name;
  }

  public getUserSurname(): string {
    return this.surname;
  }

  public getUserAge(): number {
    return this.age;
  }

  public getFullName(): string {
    return `Name: ${this.name}, Surname: ${this.surname}, Age: ${this.age}`;
  }
}

const user: User = new User({
  name: 'Ikrom',
  surname: 'Murodov',
  age: 18,
});

window.console.log(user.getUserName());
window.console.log(user.getUserSurname());
window.console.log(user.getUserAge());
window.console.log(user.getFullName());
