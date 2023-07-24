let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(1)); // true

const names = ["John", "Doe", "Jane"];
console.log(names.includes("Jane")); // true
console.log(names.includes("John")); // true
console.log(names.includes("Alice")); // false
console.log(names.includes("Doe", "John")); // true
