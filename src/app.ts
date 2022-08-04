const Logger = (logString: string) => {
  console.log('LOGGER FACTORY');
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
};

const WithTemplate = (template: string, hookId: string) => {
  console.log('TEMPLATE FACTORY');
  return <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) => {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
};

// Execution order:
@Logger('LOGGING - PERSON') // 1) logging factory  4) logging decorator
@WithTemplate('<h1/>', 'app') // 2) template factory  4) template decorator
class Person {
  name = 'Alex';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);

// ---

const Log = (target: any, propertyName: string | Symbol) => {
  console.log('Property decorator!');
  console.log(target, propertyName);
};

const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log('Accessor decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

const Log3 = (
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) => {
  console.log('Method decorator!');
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

const Log4 = (target: any, name: string | Symbol, position: number) => {
  console.log('Parameter decorator!');
  console.log(target);
  console.log(name);
  console.log(position);
};
class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const p1 = new Product('Book 1', 20); // there is not any console logs after creating instances of the class they were only after defying the class
const p2 = new Product('Book 2', 50);

class Printer {
  message = 'This works!';

  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

console.log(p.message);

const button = document.querySelector('button')!;
button.addEventListener('click', p.showMessage); // print 'undefined' due to 'this' is event.currentTarget
button.addEventListener('click', p.showMessage.bind(p)); // we can solve this issue in such way
