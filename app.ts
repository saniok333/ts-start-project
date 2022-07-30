const add = (n1: number, n2: number): number => n1 + n2;

const printResult = (num: number): void => {
  console.log(`Result: ${num}`);
};

let combineValues: (a: number, b: number) => number;

combineValues = add;
