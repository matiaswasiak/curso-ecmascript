// Enhaced Object Literals

function newUser(name, age, country) {
  return {
    name,
    age,
    country,
  };
}

console.log(newUser("John", 25, "USA")); // {name: "John", age: 25, country: "USA"}
