enum Role {
  ADMIN,
  AUTHOR,
  BOSS,
}

const person = {
  name: 'Max',
  age: 20,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log('is Admin');
  console.log(person.role); // 0
}
