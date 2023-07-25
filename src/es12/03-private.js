class User {
  // Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Methods
  speak() {
    return "Hello";
  }

  greeting() {
    return `${this.speak()}, my name is ${this.name}`;
  }

  get getAge() {
    return this.age;
  }

  set setAge(age) {
    this.age = age;
  }
}

const dung3on = new User("dung3on", 22);
console.log(dung3on.greeting());
console.log(dung3on.getAge());
