const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'Max',
  age: 20,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

person.role.push('admin'); // push is exception

console.log(person);
