"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echo(value) {
    return value;
}
echo({ name: "Bobo", age: 33 });
echo(new Person("p"));
echo(new Customer("c"));
//# sourceMappingURL=index.js.map