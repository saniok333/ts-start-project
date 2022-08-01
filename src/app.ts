class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {}

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
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }
  addReport(this: AccountingDepartment, text: string) {
    this.reports.push(text);
  }

  printReports(this: AccountingDepartment) {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Alex']);

it.addEmployee('Alex');
it.addEmployee('Max');

it.describe();

it.printEmployeeInformation();

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong');

accounting.printReports();
