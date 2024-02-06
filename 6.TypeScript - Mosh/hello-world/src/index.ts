class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Walking");
  }

  talk() {
    console.log("Talking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

printName([
  new Student(1, "Bobo", "Smile"),
  new Teacher("Mosh", "Hamedani"),
  new Principal("Marry", "Smith"),
]);

function printName(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}
