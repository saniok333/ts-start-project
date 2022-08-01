interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

const user1: Person = {
  name: 'Max',
  age: 16,

  greet(phrase) {
    console.log(phrase + this.name);
  },
};

user1.greet('Hi, my name is ');
