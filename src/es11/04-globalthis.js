// What is a web worker in JavaScript?

// Web Workers is a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. In addition, they can perform I/O using XMLHttpRequest (although the responseXML and channel attributes are always null). Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa).

console.log(window); // navigator
console.log(global); // node
console.log(self); // web worker
console.log(globalThis); // universal (node + web worker + browser
