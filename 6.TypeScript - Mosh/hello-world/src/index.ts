function reject(message: string): never {
  throw new Error(message);
}

function proccessEvents(): never {
  while (true) {
    //Read a message rfom a queue
  }
}

reject("...");
proccessEvents();
console.log("Hello World");
