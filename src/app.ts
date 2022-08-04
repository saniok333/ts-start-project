const Logger = (logString: string) => (constructor: Function) => {
  console.log(logString);
  console.log(constructor);
};

@Logger('LOGGING - PERSON')
class Person {
  name = 'Alex';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
