//type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
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
