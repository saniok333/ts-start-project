const Logger = (logString: string) => (constructor: Function) => {
  console.log(logString);
  console.log(constructor);
};

const WithTemplate =
  (template: string, hookId: string) => (constructor: any) => {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };

//@Logger('LOGGING - PERSON')
@WithTemplate('<h1/>', 'app')
class Person {
  name = 'Alex';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
