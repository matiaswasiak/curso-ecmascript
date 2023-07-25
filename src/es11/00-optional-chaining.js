// What is optional chaining in JavaScript?

// Optional chaining is a new feature introduced in ES2020 that allows you to access deeply nested object properties without worrying if the property exists or not. It is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

const users = {
  dung3on: {
    country: "AR",
  },
  johndoe: {
    country: "US",
  },
};

console.log(users.dung3on.country);
console.log(users.bebeloper?.country);
