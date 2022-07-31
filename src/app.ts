class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');

accounting.name = 'New Name';

accounting.addEmployee('Alex');
accounting.addEmployee('Max');

// accounting.employees[2] = 'Fred'  // this string doesn't work due to a private modifier

accounting.describe();

accounting.printEmployeeInformation();
