const Logger = (logString: string) => {
  console.log('LOGGER FACTORY');
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
};

const WithTemplate = (template: string, hookId: string) => {
  console.log('TEMPLATE FACTORY');
  return (constructor: any) => {
    console.log('Rendering template');
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
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

const Log = (target: any, propertyName: string) => {
  console.log('Property decorator!');
  console.log(target, propertyName);
};
class Product {
  @Log
  title: string;
  private _price: number;

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

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
