type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Alex',
  privileges: ['create-server'],
  startDate: new Date(),
};

type UnknownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: UnknownEmployee) => {
  console.log(`Name ${emp.name}`);
  if ('privileges' in emp) {
    console.log(`Privileges ${emp.privileges}`);
  }
  if ('startDate' in emp) {
    console.log(`Start Date ${emp.startDate}`);
  }
};

printEmployeeInformation({ name: 'Alex', privileges: ['create-server'] });

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving truck');
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo ... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};

useVehicle(v1);
useVehicle(v2);

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const add = (a: Combinable, b: Combinable) => {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
};

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse';
  runningSpeed: number;
}
type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving with speed ' + speed);
};

moveAnimal({ type: 'bird', flyingSpeed: 300 });
