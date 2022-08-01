//type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name: string;
  outputName?: string; // optional interface property
}
interface Greetable extends Named {
  greet(phrase: string): void;
  optionalGreet?(phrase: string): void; // optional interface method
}

class Person implements Greetable {
  name: string;
  age: number;
  occupation?: string; // optional class property

  constructor(n: string, a: number, o?: string) {
    this.name = n;
    this.age = a;
    if (o) {
      this.occupation = o;
    }
  }

  greet(phrase: string) {
    console.log(phrase + this.name);
    if (this.occupation) {
      console.log(phrase + this.occupation);
    }
  }
}

const user1: Greetable = new Person('Max', 16);

user1.greet('Hi, my name is ');
