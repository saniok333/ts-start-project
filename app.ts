// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: 'Max',
  age: 20,
  hobbies: ['Sports', 'Cooking'],
};

let favoriteActivities: (string | number)[];
favoriteActivities = ['Sports', 3];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
