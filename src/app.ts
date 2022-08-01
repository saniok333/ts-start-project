abstract class Department {
  static fiscalYear = 2022;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  describe(this: ITDepartment) {
    console.log('IT Department - ID: ' + this.id);
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

  describe(this: AccountingDepartment) {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(this: AccountingDepartment, name: string) {
    if (name === 'Alex') {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee('Alex');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Alex']);

it.addEmployee('Alex');
it.addEmployee('Max');

it.describe();

it.printEmployeeInformation();

const accounting = new AccountingDepartment('d2', []);

console.log(AccountingDepartment.fiscalYear);

accounting.addReport('Something went wrong');
accounting.mostRecentReport = 'Year end report';

console.log(accounting.mostRecentReport);

accounting.printReports();

accounting.addEmployee('Alex');
accounting.addEmployee('Max');

accounting.printEmployeeInformation();

accounting.describe();
