const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Whoooops!");
    }
  });
};

// const anotherFunction = () => {
//   return new Promise((resolve) => {
//     if (true) {
//       resolve("Hey!");
//     }
//   });
// };

anotherFunction()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally"));
