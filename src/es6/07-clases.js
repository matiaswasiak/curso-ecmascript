// Declare class
class User {}
// Create instance
const newUser = new User();

class user {
  // method
  sayHello() {
    return "Hello";
  }
}

const dung3on = new user();
console.log(dung3on.sayHello());
const bebeloper = new user();
console.log(bebeloper.sayHello());

// Class constructor
class User2 {
  constructor() {
    console.log("I am a constructor");
  }

  sayHello() {
    console.log("Hello!");
  }
}

const dung3on2 = new User2();

// This
class User3 {
  constructor(username) {
    this.username = username;
  }
  sayHello() {
    return `Hello, my username is ${this.username}`;
  }
}

const dung3on3 = new User3("dung3on");
console.log(dung3on3.sayHello());

// Setters and getters
class User4 {
  // Constructor
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
  // Method
  sayHello() {
    return `Hello, my username is ${this.username}`;
  }
  // Getter
  get getPassword() {
    return this.password;
  }
  // Setter
  set setPassword(newPassword) {
    this.password = newPassword;
  }
}

const dung3on4 = new User4("dung3on", "123456");
console.log(dung3on4.getPassword);
dung3on4.setPassword = "654321";
console.log(dung3on4.getPassword);
