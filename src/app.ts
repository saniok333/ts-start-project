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
