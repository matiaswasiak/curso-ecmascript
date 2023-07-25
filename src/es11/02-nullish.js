// What is nullish coalescing in JavaScript? and what is the difference between nullish coalescing and logical OR operator?

// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

const anotherNumber = null;
const validate = anotherNumber ?? 5;
console.log(validate);
