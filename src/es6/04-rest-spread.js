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
