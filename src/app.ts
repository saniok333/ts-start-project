class Department {
  protected employees: string[] = []; // we changed modifier 'cause private doesn't allow change a property from extended class

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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }
  addReport(this: AccountingDepartment, text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports(this: AccountingDepartment) {
    console.log(this.reports);
  }

  addEmployee(this: AccountingDepartment, name: string) {
    if (name === 'Alex') {
      return;
    }
    this.employees.push(name);
  }
}

const it = new ITDepartment('d1', ['Alex']);

it.addEmployee('Alex');
it.addEmployee('Max');

it.describe();

it.printEmployeeInformation();

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong');
accounting.mostRecentReport = 'Year end report';

console.log(accounting.mostRecentReport);

accounting.printReports();

accounting.addEmployee('Alex');
accounting.addEmployee('Max');

accounting.printEmployeeInformation();
