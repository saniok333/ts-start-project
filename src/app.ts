const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const mergedObj = merge({ name: 'Alex' }, { age: 20 });
console.log(mergedObj.name);
