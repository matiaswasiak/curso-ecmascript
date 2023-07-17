// Enhaced Object Literals
// What is an object literal?
// An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).

function newUser(name, age, country) {
  return {
    name,
    age,
    country,
  };
}

console.log(newUser("John", 25, "USA")); // {name: "John", age: 25, country: "USA"}
