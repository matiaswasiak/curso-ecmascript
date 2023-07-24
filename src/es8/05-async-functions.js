const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const fn = async () => {
  const hello = await fnAsync();
  console.log(hello);
  console.log("Hello from fn function");
};

console.log("Before");
fn();
console.log("After");
