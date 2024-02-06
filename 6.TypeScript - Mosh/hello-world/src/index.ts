// interface Person{
//   name: string
// }

class Person {
  constructor(public name: string) {}
}

class Customer extends Person {}

function echo<T extends Person>(value: T): T {
  return value;
}

echo({ name: "Bobo", age: 33 });
echo(new Person("p"));
echo(new Customer("c"));
