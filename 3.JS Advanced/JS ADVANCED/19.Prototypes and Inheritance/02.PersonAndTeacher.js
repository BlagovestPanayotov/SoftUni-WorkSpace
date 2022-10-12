function result() {
    class Person {
        constructor(name,email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}


let classes = result();
let Teacher = classes.Teacher;
let Person = classes.Person;

let t = new Teacher('pesho','pesho@gmail.com','Mathematics');
console.log(t.name);
// expect(t.name).to.equal("pesho");
// expect(t.email).to.equal('pesho@gmail.com');
// expect(t.subject).to.equal('Mathematics');
