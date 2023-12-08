class User {
  #age; // private field

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  static speak() {
    return "Hello";
  }

  greeting() {
    return `${User.speak()}, my name is ${this.name}`;
  }

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }
}

const dung3on = new User("dung3on", 22);

function testUser(user) {
  console.log(user.greeting());
  console.log(user.age);
}

testUser(dung3on);
