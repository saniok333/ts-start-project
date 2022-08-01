interface Named {
  readonly name: string;
}
interface Greetable {
  greet(phrase: string): void;
}

class Person implements Greetable, Named {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(phrase + this.name);
  }
}

const user1: Greetable = new Person('Max', 16);

user1.greet('Hi, my name is ');
