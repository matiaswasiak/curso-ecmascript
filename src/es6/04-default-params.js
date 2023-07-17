function newUser(name, age) {
  var name = name || "Anonymous";
  var age = age || 0;

  console.log("Hello " + name + ", you are " + age + " years old.");
}

newUser();
newUser("John", 25);

function newAdmin(name = "Anonymous", age = 0) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

newAdmin();
newAdmin("John", 25);
