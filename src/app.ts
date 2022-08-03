const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: 'Alex' }, { age: 20 });
console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  }
  if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
};

console.log(countAndDescribe('Hi there!')); //['Hi there!', 'Got 9 elements.']
console.log(countAndDescribe(['Alex', 'Max', 5])); //[Array(3), 'Got 3 elements.']
// console.log(countAndDescribe(100)); // It won't work 'cause number doesn't have a length property

const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return 'Value ' + obj[key];
};

console.log(extractAndConvert({ name: 'Alex', age: 20 }, 'name'));

class DataStorage<T extends number | string | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Alex');
// textStorage.addItem(100) // It won't work 'cause we said that it will be a storage of strings
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>(); // Type 'object' does not satisfy the constraint 'string | number | boolean'.
