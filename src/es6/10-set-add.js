// What is a set?
// A set is a collection of unique values. A set can be created from an array using the spread operator (...). A set can also be created using the new keyword.

// Example of creating a set from an array using the spread operator (...)
// const list = [1, 2, 3, 4, 5];
// const set = new Set([...list]);

// What's the difference between a set and an array?
// A set is similar to an array but it doesn't allow duplicate values. A set is an unordered collection of unique values. A set can be iterated in the insertion order of the elements.

const list = new Set();

list.add(1);
list.add(2);
// list.add(2).add(3).add(4).add(5);
list.add(3);
list.add(4);
list.add(5);

console.log(list); // Set { 1, 2, 3, 4, 5 }
console.log(list.has(1)); // true
console.log(list.has(6)); // false
