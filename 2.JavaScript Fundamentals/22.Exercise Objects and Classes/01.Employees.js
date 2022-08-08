function employees(input) {

    class Employee {
        constructor (name){
            this.name = name;
            this.personalNumber = name.length;
        }
    }

    let employees = []

    for(let person of input){
       employees.push(new Employee(person));
    }

    for(let employee of employees){
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }

}

//alternative solution

// function employees(input){
//     let emp = {};
//     for(let employee of input){
//         emp.name = employee;
//         emp.personalNumber = employee.length;
//         console.log(`Name: ${emp.name} -- Personal Number: ${emp.personalNumber}`);
//     }
// }

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);
