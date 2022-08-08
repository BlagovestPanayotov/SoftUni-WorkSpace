function addressBook(input) {

    let result = {};

    for (let line of input) {
        line = line.split(':');
        let [name, address] = line;
        result[name] = address;
    }

    let sorted = Object.keys(result).sort((a, b) => a.localeCompare(b));
    
    sorted.forEach(person => {
        console.log(`${person} -> ${result[person]}`);
    });

}


addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);