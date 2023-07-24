const user = { username: "john.doe", name: "John Doe", age: 32 };
const { username, ...rest } = user;

console.log(username); // john.doe
console.log(rest); // { name: 'John Doe', age: 32 }
