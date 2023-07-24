// What is a generator?
// A generator is a function that can stop midway and then continue from where it stopped. In short, a generator appears to be a function but it behaves like an iterator.

// Cases where generators are useful
// Generators are useful when dealing with infinite sequences, lazy execution, massive computations, asynchronous operations, etc.

// How to create a generator?
// A generator is created by adding an asterisk (*) to the function keyword. A generator function can have one or more yield expressions. A yield expression is used to pause the generator and provides a value back to the caller. The yield expression is used to produce a sequence of values.

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate([1, 2, 3]);
console.log(it.next().value); // 1
console.log(it.next().value); // 2
console.log(it.next().value); // 3
