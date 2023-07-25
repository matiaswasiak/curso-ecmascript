// What is String.prototype.matchAll in JavaScript?
// The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.

const regex = /\b(Apple)+\b/g;

const fruits = "Apple, Banana, Kiwi, Apple, Orange, Apple, Mango";

for (const match of fruits.matchAll(regex)) {
  console.log(match);
}
