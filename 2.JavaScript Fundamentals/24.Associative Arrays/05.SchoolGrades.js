function schoolGrade(input) {

    let result = new Map();

    for (let line of input) {
        line = line.split(' ');
        let name = line.shift();
        let grades = line.map(Number);
        if (result.has(name)) {
            grades.push(...result.get(name));
            result.set(name, grades);
        } else {
            result.set(name, grades);
        }
    }

    let sorted = Array.from(result.keys()).sort((a, b) => a.localeCompare(b));

    for (let name of sorted) {
        let avarage = result.get(name).reduce((a, b) => a + b) / result.get(name).length;
        console.log(`${name}: ${avarage.toFixed(2)}`);
    }

}


schoolGrade(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);

schoolGrade(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);