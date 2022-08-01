class Department {
  //   private id: string;
  //   private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log('Department: (' + this.id + ') ' + this.name);
  }

  addEmployee(this: Department, employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  // addDepartmentId(this: Department, id: string){  // this method won't work due to id property has readonly modifier
  //   this.id = id
  // }
}

const accounting = new Department('d1', 'Accounting');

// accounting.name = 'New Name';

accounting.addEmployee('Alex');
accounting.addEmployee('Max');

// accounting.employees[2] = 'Fred'  // this string doesn't work due to a private modifier

accounting.describe();

accounting.printEmployeeInformation();
