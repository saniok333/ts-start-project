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
