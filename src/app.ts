const add = (...numbers: number[]) => numbers.reduce((sum, num) => sum + num);

const addedNumbers = add(3, 5, 2, 8);
console.log(addedNumbers);

//using restOperator with tuples
const add2 = (...numbers: [number, number, number]) =>
  numbers.reduce((sum, num) => sum + num);

const addedNumbers2 = add2(3, 5, 2);
console.log(addedNumbers2);
