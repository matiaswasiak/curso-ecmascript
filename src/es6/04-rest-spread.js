// Arrays destructuring

let fruits = ["apple", "banana", "kiwi", "orange", "watermelon"];
let [fruit1, fruit2, fruit3, ...rest] = fruits;
console.log(fruit1); // apple

// Objects destructuring

let person = {
  name: "John",
  age: 25,
  location: {
    city: "New York",
    temp: 92,
  },
};

let { name, age } = person;
console.log(name); // John

// Spread operator

let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers); // [1, 2, 3, 4, 5, 6]

let otherPerson = {
  name: "John",
  age: 25,
};

let newPerson = {
  id: 1,
  ...otherPerson,
  location: "New York",
};
console.log(newPerson); // {id: 1, name: "John", age: 25, location: "New York"}

// Rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3, 4, 5);
