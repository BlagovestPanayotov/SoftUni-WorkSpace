class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        const verifyingCriteria = ['', undefined, null]
        if (verifyingCriteria.includes(name)
            || verifyingCriteria.includes(salary)
            || verifyingCriteria.includes(position)
            || verifyingCriteria.includes(department)
            || Number(salary) < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] =
                [{ totalSalary: 0, totalEmployees: 0, get averageSalary() { return this.totalSalary / this.totalEmployees } }];
        }
        this.departments[department].push({ name: name, salary: Number(salary), position: position });
        this.departments[department][0].totalSalary += Number(salary);
        this.departments[department][0].totalEmployees++;
        return `New employee is hired. Name: ${name}. Position: ${position}`;

    }

    bestDepartment() {
        const currentDepartments = Object.entries(this.departments);
        let bestCurrentDepartment = foo();
        function foo() {
            let output;
            let bestAvg = 0;

            for (const [department, employees] of currentDepartments) {
                if (employees[0].averageSalary > bestAvg) {
                    output = [department, employees];
                    bestAvg = Number(employees[0].averageSalary.toFixed(2))
                }
            }
            return output
        }

        let output = `Best Department is: ${bestCurrentDepartment[0]}\nAverage salary: ${bestCurrentDepartment[1][0].averageSalary.toFixed(2)}\n`;
        bestCurrentDepartment = JSON.parse(JSON.stringify(this.departments[bestCurrentDepartment[0]]));
        bestCurrentDepartment.shift();
        bestCurrentDepartment.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))

        for (const { name, salary, position } of bestCurrentDepartment) {
            output += `${name} ${salary} ${position}\n`
        }
        return output.trim();


    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());

