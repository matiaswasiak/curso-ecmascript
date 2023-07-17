var lastName = "Doe";
lastName = "Smith";
console.log(lastName); // Smith

let fruit = "apple";
fruit = "banana";
console.log(fruit); // banana

const PI = 3.14;
PI = 3.1415; // TypeError: Assignment to constant variable.

const fruits = () => {
  if (true) {
    var fruit1 = "apple";
    let fruit2 = "banana";
    const fruit3 = "kiwi";
  }

  console.log(fruit1); // apple
  console.log(fruit2); // ReferenceError: fruit2 is not defined
  console.log(fruit3); // ReferenceError: fruit3 is not defined
};

fruits();
