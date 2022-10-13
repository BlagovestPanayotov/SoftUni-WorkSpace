function people() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.tasks = [];
            this.salary = 0;
            this.currentTask = 0;
            this.dividend = 0;
        }
        work() {

            console.log(this.tasks[this.currentTask]);
            this.currentTask++;
            if (this.currentTask > this.tasks.length - 1) {
                this.currentTask = 0;
            }
        }
        collectSalary(){
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${name} is working on a simple task.`];

        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${name} is working on a complicated task.`,
            `${name} is taking time off work.`,
            `${name} is supervising junior workers.`];
        }
    }

    class Manager extends Employee {
        constructor(name,age){
            super(name,age);
            this.tasks = [`${name} scheduled a meeting.`,
            `${name} is preparing a quarterly report.`];
        }
        
    }


    return {
        Employee,
        Junior,
        Senior,
        Manager,
    }

}

const classes = people();
const junior = new classes.Junior('Ivan', 25);

junior.work(); //Ivan is working on a simple task. 
junior.work(); //Ivan is working on a simple task. 

junior.salary = 5811;
junior.collectSalary(); //Ivan received 5811 this month.

const senior = new classes.Senior('Alex', 31);

senior.work(); //Alex is working on a complicated task.
senior.work(); //Alex is taking time off work.
senior.work(); //Alex is supervising junior workers.
senior.work(); //Alex is working on a complicated task.

senior.salary = 12050;
senior.collectSalary(); //Alex received 12050 this month.

const manager = new classes.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary(); //Tom received 15000 this month.
manager.dividend = 2500;
manager.collectSalary(); //Tom received 17500 this month.
