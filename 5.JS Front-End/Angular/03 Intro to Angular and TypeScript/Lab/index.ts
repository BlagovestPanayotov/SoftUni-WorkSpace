class User {
  private name: String;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    return `${this.name} says hi!`;
  }
}

const user = new User("Pesho");

console.log(user.sayHello());
